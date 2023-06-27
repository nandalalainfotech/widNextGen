import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnPermissionsController } from 'src/controller/rn_permissions.controller';
import { RnPermissions } from 'src/entity/rn_permissions.entity';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPermissionsService } from 'src/service/rn_permissions.service';
import { RnRolesService } from 'src/service/rn_roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnPermissions, RnUsers, RnRoles])],
  providers: [RnPermissionsService,RnRolesService, RolesGuard],
  controllers: [RnPermissionsController],
  exports: [RnPermissionsService]
})
export class RnPermissionsModule { }