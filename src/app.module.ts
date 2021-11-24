import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { File } from './Files/files.entity';
import { FilesModule } from './Files/files.module';

@Module({
  imports: [FilesModule,TypeOrmModule.forRoot({
    type: "mongodb",
    host: "localhost",
    port:27017,
    database: "nest-files",
    entities: [File],
    synchronize: true,
    useUnifiedTopology: true
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
