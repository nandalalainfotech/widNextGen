import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnPermissions } from 'src/entity/rn_permissions';
import { RnRoles } from 'src/entity/rn_roles';
import { RnUsers } from 'src/entity/rn_users';
import { RolesGuard } from 'src/roles/role.guard';
import { RnRolesService } from 'src/service/rn_roles.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnUsers, RnRoles])],
  providers: [RnUsersService, RolesGuard],
  controllers: [RnUsersController],
  exports: [RnUsersService]
})
export class RnUsersModule { }

