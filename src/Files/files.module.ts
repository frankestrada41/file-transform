import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilesController } from "./files.controller";
import { File } from "./files.entity";
import { FilesService } from "./files.service";

@Module({
    imports:[TypeOrmModule.forFeature([File])],
    controllers:[FilesController],
    providers:[FilesService]
})
export class FilesModule{}
