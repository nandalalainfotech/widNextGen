import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnLanguagesController } from 'src/controller/rn_languages.controller';
import { RnLanguages } from 'src/entity/rn_languages';
import { RolesGuard } from 'src/roles/role.guard';
import { RnLanguagesService } from 'src/service/rn_languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnLanguages])],
  providers: [RnLanguagesService],
  controllers: [RnLanguagesController],
})
export class RnLanguagesModule { }