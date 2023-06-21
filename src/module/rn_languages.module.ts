import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnLanguagesController } from 'src/controller/rn_languages.controller';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnLanguages } from 'src/entity/rn_languages';
import { RnUsers } from 'src/entity/rn_users';
import { RolesGuard } from 'src/roles/role.guard';
import { RnLanguagesService } from 'src/service/rn_languages.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnLanguages, RnUsers])],
  providers: [RnLanguagesService, RnUsersService, RolesGuard],
  controllers: [RnLanguagesController, RnUsersController],
  exports: [RnLanguagesService]
})
export class RnLanguagesModule { }