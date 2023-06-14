import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PermissionDTO } from 'src/dto/permission.dto';
import { Permission001mb } from 'src/entity/Permission001mb';
import { PermissionService } from 'src/service/permission.service';



@ApiBearerAuth()
@Controller('/wdinext/api/permissions')
export class PermissionController {
	constructor(private readonly permissionService: PermissionService) { }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Post("")
	create(@Body() permissionDTO: PermissionDTO): Promise<Permission001mb> {
		return this.permissionService.create(permissionDTO);
	}
	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Put(":id")
	update(@Body() permissionDTO: PermissionDTO): Promise<Permission001mb> {
		return this.permissionService.update(permissionDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Get('')
	findAll(): Promise<Permission001mb[]> {
		return this.permissionService.findAll();
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard)
	@Get(':Id')
	findOne(@Param('Id') Id: number): Promise<Permission001mb> {
		return this.permissionService.findOne(Id);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('prmsnId') prmsnId: number): Promise<void> {
		return this.permissionService.remove(prmsnId);
	}


}

