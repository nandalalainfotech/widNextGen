import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleDTO } from 'src/dto/Role.dto';
import { Role001mb } from 'src/entity/Role001mb';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';
import { RoleService } from 'src/service/Role.service';


@ApiBearerAuth()
@Controller('/wdinext/api/roles')
export class RoleController {
	constructor(private readonly roleService: RoleService) { }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post("")
	create(@Body() roleDTO: RoleDTO): Promise<Role001mb> {
		return this.roleService.create(roleDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Put(":id")
	update(@Body() roleDTO: RoleDTO): Promise<Role001mb> {
		return this.roleService.update(roleDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get('')
	findAll(): Promise<Role001mb[]> {
		return this.roleService.findAll();
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get(':Id')
	findOne(@Param('roleId') roleId: number): Promise<Role001mb> {
		return this.roleService.findOne(roleId);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Delete(':id')
	remove(@Param('id') id: number): Promise<void> {
		return this.roleService.remove(id);
	}
}

