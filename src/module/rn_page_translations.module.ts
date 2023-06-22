import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnPageTranslationsController } from 'src/controller/rn_page_translations.controller';
import { RnRolesController } from 'src/controller/rn_roles.controller';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnPageTranslations } from 'src/entity/rn_page_translations.entity';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPageTranslationsService } from 'src/service/rn_page_translations.service';
import { RnRolesService } from 'src/service/rn_roles.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnPageTranslations, RnRoles, RnUsers])],
  providers: [RnPageTranslationsService, RnUsersService, RnRolesService, RolesGuard],
  controllers: [RnPageTranslationsController, RnRolesController, RnUsersController],
})
export class RnPageTranslationsModule { }