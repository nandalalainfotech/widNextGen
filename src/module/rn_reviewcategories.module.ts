import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnCategoriesController } from 'src/controller/rn_reviewcategories.controller';
import { RnRolesController } from 'src/controller/rn_roles.controller';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnCategories } from 'src/entity/rn_reviewcategories.entity';
import { RnCategoryTranslations } from 'src/entity/rn_reviewcategory_translations.entity';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCategoriesService } from 'src/service/rn_reviewcategories.service';
import { RnCategoryTranslationsService } from 'src/service/rn_reviewcategory_translations.service';
import { RnRolesService } from 'src/service/rn_roles.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnCategories, RnCategoryTranslations, RnRoles, RnUsers])],
  providers: [RnCategoriesService, RnCategoryTranslationsService, RnUsersService, RnRolesService, RolesGuard],
  controllers: [RnCategoriesController, RnRolesController, RnUsersController],
})
export class RnCategoriesModule { }