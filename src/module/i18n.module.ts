import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/controller/app.controller';
import { AppService } from 'src/service/app.service';
import { TranslationService } from 'src/shared/translation.service';
// import { ApiConfigService } from 'src/shared/api.service';

@Module({
   imports: [TypeOrmModule.forFeature([])],
  providers: [ AppService, TranslationService],
  controllers: [AppController, ],
})
export class I18nModule { }