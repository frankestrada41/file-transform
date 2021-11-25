import { Controller, Get, Post, Body } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FileDto } from "./files.dto";

@Controller('files')
export class FilesController{
    constructor(private filesService: FilesService){}
    @Get()
     async findAll(){
        const list =  await this.filesService.getFiles()
        return list
    }

    @Post()
    insertFile(@Body() user: FileDto){
        return this.filesService.insertFile(user)
    }
}