import { Controller, Get } from "@nestjs/common";

@Controller('files')
export class FilesController{
    @Get()
    findAll(){
        return 'findAll Working'
    }
}