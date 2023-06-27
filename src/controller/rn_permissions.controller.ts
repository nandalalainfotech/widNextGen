import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnPermissionsDTO } from 'src/dto/rn_permissions.dto';
import { RnPermissions } from 'src/entity/rn_permissions.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPermissionsService } from 'src/service/rn_permissions.service';



@ApiBearerAuth()
@Controller('/api/permissions')
export class RnPermissionsController {
	rnRolesService: any;
	constructor(private readonly rnPermissionService: RnPermissionsService) { }

		
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnPermissions[]> {
		return this.rnPermissionService.findAll();
	}


	@UseGuards(JwtAuthGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Put("/:roleId")
	update(@Body() rnPermissionsDTO: RnPermissionsDTO): Promise<RnPermissions> {
		return this.rnPermissionService.update(rnPermissionsDTO);
	}
	


}

