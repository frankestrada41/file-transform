import { Injectable } from "@nestjs/common"
import { FileDto } from "./files.dto";
import { FilesService } from "./files.service";
const chokidar = require('chokidar')
const fs = require('fs')
const pdfparse = require('pdf-parse')
const watcher = chokidar.watch('uploads',{ignored: /^\./, persistent: true})

@Injectable()
export class FilesWatcher{
    constructor(private filesService: FilesService){}
    async watch(){
        let p = this.filesService
        await watcher.on('add', async function (path:string) {
            console.log('File', path, 'has been added');
            const pdfFile = fs.readFileSync(path)
            const pdfParsed = await pdfparse(pdfFile)
            const pdfText =  await pdfParsed.text
            const newData = await pdfText.replace('Name','*')
                .replace('lastName','*')
                .replace('Age','*')
                .replace('hasPet', '*')
                .split('\n')
               
                let newPdfData = await newData.filter(item => item.includes('*'))
                 .map(item => item.replace('*:', '').trim())   
                let pdfNewObj: FileDto = {name:newPdfData[0],
                                    lastName:newPdfData[1],
                                    age:newPdfData[2],
                                    hasPet:newPdfData[3]
                                } 
                p.insertFile(pdfNewObj)
        })
       
    }
}
