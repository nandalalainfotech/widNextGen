import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnRolesDTO } from 'src/dto/rn_roles.dto';
import { RnRoles } from 'src/entity/rn_roles';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnRolesService } from 'src/service/rn_roles.service';


@ApiBearerAuth()
@Controller('/wdinext/api/roles')
export class RnRolesController {
	constructor(private readonly rnRolesService: RnRolesService) { }


	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Post("")
	create(@Body() rnRolesDTO: RnRolesDTO): Promise<RnRoles> {
		console.log("roleDTO==>22", rnRolesDTO);
		return this.rnRolesService.create(rnRolesDTO);
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Put("/:id")
	update(@Body() rnRolesDTO: RnRolesDTO): Promise<RnRoles> {
		return this.rnRolesService.update(rnRolesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnRoles[]> {
		return this.rnRolesService.findAll();
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnRoles> {
		return this.rnRolesService.findOne(id);
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnRolesService.remove(id);
	}
}

