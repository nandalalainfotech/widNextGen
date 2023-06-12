import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from 'src/controller/permission.controller';
import { Permission001mb } from 'src/entity/Permission001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { RoleService } from 'src/service/Role.service';
import { PermissionService } from 'src/service/permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission001mb, Role001mb])],
  providers: [PermissionService, RoleService],
  controllers: [PermissionController],
})
export class PermissionModule { }