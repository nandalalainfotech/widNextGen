import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controller/user.controller';
import { Group001mb } from 'src/entity/Group001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';
import { RoleService } from 'src/service/Role.service';
import { GroupService } from 'src/service/group.service';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users001mb, Role001mb, Group001mb])],
  providers: [UserService, Role001mbsGuard, RoleService, GroupService],
  controllers: [UserController],
  exports: [UserService, RoleService, GroupService]
})
export class UserModule { }