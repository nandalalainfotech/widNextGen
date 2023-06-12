import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controller/users.controller';
import { Group001mb } from 'src/entity/Group001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';
import { RoleService } from 'src/service/Role.service';
import { GroupService } from 'src/service/group.service';
import { UsersService } from 'src/service/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users001mb, Role001mb, Group001mb])],
  providers: [UsersService, Role001mbsGuard, RoleService, GroupService],
  controllers: [UsersController],
  exports: [UsersService, RoleService, GroupService]
})
export class UsersModule { }