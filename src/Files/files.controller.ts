import { Controller, Get } from "@nestjs/common";
import { FilesService } from "./files.service";

@Controller('files')
export class FilesController{
    constructor(private filesService: FilesService){}
    @Get()
    async findAll(){
        const list = await this.filesService.getFiles()
        console.log(list)
        return list
    }
}