import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { File } from "./files.entity";

@Injectable()
export class FilesService{
    constructor(@InjectRepository(File) private readonly filesRepository: Repository<File>){}
    async getFiles(){
        return await this.filesRepository.find()
    }
}