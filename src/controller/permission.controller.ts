import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PermissionDTO } from 'src/dto/permission.dto';
import { Permission001mb } from 'src/entity/Permission001mb';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';

import { PermissionService } from 'src/service/permission.service';



@ApiBearerAuth()
@Controller('/wdinext/api/permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    // @hasRole(Role001mbs.superadmin)
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() permissionDTO: PermissionDTO): Promise<Permission001mb> {
        return this.permissionService.create(permissionDTO);
    }
	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() permissionDTO: PermissionDTO): Promise<Permission001mb> {
		return this.permissionService.update(permissionDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Permission001mb[]> {
		return this.permissionService.findAll();
	}


}

