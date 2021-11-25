import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { File } from "./files.entity";
import { IFile } from "./files.interface";

@Injectable()
export class FilesService{
    constructor(@InjectRepository(File) 
    private readonly filesRepository: Repository<File>){}
    async getFiles():Promise<IFile[]>{
        return await this.filesRepository.find()
    }

    async insertFile(newFile:IFile):Promise<IFile>{
        return this.filesRepository.save(newFile)
    }
}