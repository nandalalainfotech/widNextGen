import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnPagesController } from 'src/controller/rn_pages.controllers';
import { RnRolesController } from 'src/controller/rn_roles.controller';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnPages } from 'src/entity/rn_pages';
import { RnRoles } from 'src/entity/rn_roles';
import { RnUsers } from 'src/entity/rn_users';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPagesService } from 'src/service/rn_pages.service';
import { RnRolesService } from 'src/service/rn_roles.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnPages, RnRoles, RnUsers])],
  providers: [RnPagesService, RnUsersService, RnRolesService, RolesGuard],
  controllers: [RnPagesController, RnRolesController, RnUsersController],
})
export class RnPagesModule { }

