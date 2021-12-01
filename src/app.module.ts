import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './Files/files.module';
import { join } from "path";

@Module({
  imports: [FilesModule,TypeOrmModule.forRoot({
    name:"default",
    type: "mongodb",
    host: "localhost",
    port:27017,
    database: "nest-files",
    useNewUrlParser: true,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
