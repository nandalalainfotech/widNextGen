import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnRolesController } from 'src/controller/rn_roles.controller';
import { RnRoles } from 'src/entity/rn_roles';
import { RnUsers } from 'src/entity/rn_users';
import { RolesGuard } from 'src/roles/role.guard';
import { RnRolesService } from 'src/service/rn_roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnRoles, RnUsers])],
  providers: [RnRolesService, RolesGuard],
  controllers: [RnRolesController],
})
export class RnRolesModule {}
