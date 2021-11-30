import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilesController } from "./files.controller";
import { File } from "./files.entity";
import { FilesService } from "./files.service";
import { FilesWatcher } from "./files.watcher";

@Module({
    imports:[TypeOrmModule.forFeature([File])],
    controllers:[FilesController],
    providers:[FilesService, FilesWatcher]
})
export class FilesModule{}
