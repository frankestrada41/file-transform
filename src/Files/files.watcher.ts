import { Injectable } from "@nestjs/common"

const chokidar = require('chokidar')
const fs = require('fs')
const pdfparse = require('pdf-parse')
const watcher = chokidar.watch('uploads',{ignored: /^\./, persistent: true})

@Injectable()
export class FilesWatcher{
    wathc(){
        
        watcher
        .on('add', function(path) {
            console.log('File', path, 'has been added');
            const pdfFile = fs.readFileSync(path)
            pdfparse(pdfFile).then(function(data){
                
                const dataStr = data.text
                const newData = dataStr.replace('Name','*')
                .replace('lastName','*')
                .replace('Age','*')
                .replace('hasPet', '*')
                .split('\n')
                
                const filData = newData.filter(item => item.includes('*'))
                .map(item => item.replace('*:', '').trim())
                
                console.log(filData)
            })

        })
    }
}
