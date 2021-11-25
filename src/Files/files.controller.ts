import { Controller, Get, Post, Body } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FileDto } from "./files.dto";
import { IFile } from "./files.interface";

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
}