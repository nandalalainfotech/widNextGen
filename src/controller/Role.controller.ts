import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleDTO } from 'src/dto/Role.dto';
import { Role001mb } from 'src/entity/Role001mb';
import { hasRole } from 'src/role001mbs/role001mbs.decorator';
import { Role001mbs } from 'src/role001mbs/role001mbs.enum';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';

import { RoleService } from 'src/service/Role.service';


@ApiBearerAuth()
@Controller('/wdinext/api/roles')
export class RoleController {
	constructor(private readonly roleService: RoleService) { }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post("save")
	create(@Body() roleDTO: RoleDTO): Promise<Role001mb> {
		console.log("roleDTO==>22", roleDTO);
		return this.roleService.create(roleDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Put("update")
	update(@Body() roleDTO: RoleDTO): Promise<Role001mb> {
		return this.roleService.update(roleDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get('findAll')
	findAll(): Promise<Role001mb[]> {
		console.log("Role001mb==>22", Role001mb);
		return this.roleService.findAll();
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.roleService.remove(id);
	}
}

