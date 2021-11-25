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
import { imageFileFilter } from "./files.upload.util";
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController{
    constructor(private filesService: FilesService){}
    @Get()
     async findAll():Promise<IFile[]>{
        const list =  await this.filesService.getFiles()
        return list
    }

    @Post()
    insertFile(@Body() user: FileDto):Promise<IFile>{
        return this.filesService.insertFile(user)
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            dest: './uploads'
        }
    ))
    uploadFile(@UploadedFile() file){
        const resp = {
            oN: file.originalname,
            fN: file.filename
        }
        return resp
    }

}