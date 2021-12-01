import { 
    Controller, 
    Get, 
    Post, 
    Body,
    UseInterceptors, 
    UploadedFile, 

} from "@nestjs/common";
import {FileInterceptor} from '@nestjs/platform-express'
import { FilesService } from "./files.service";
import { FileDto } from "./files.dto";
import { IFile } from "./files.interface";
import { upload } from "./files.diskStorage";
import { FilesWatcher } from "./files.watcher";


@Controller('files')
export class FilesController{
    constructor(private filesService: FilesService, private filesWatcher: FilesWatcher){}
    @Get()
     async findAll():Promise<IFile[]>{
        const list =  await this.filesService.getFiles()
        return list
    }

    @Post()
    insertFile(@Body() file: FileDto):Promise<IFile>{
        return this.filesService.insertFile(file)
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', upload
    ))
     async uploadFile(@UploadedFile() file){
        const resp = {
            oN: file.originalname,
            fN: file.filename
        }
        this.filesWatcher.watch()
        // console.log('im ans  ',ans)
        return resp
    }

}