import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDTO } from 'src/dto/User.dto';
import { Users001mb } from 'src/entity/Users001mb';
import { hasRole } from 'src/role001mbs/role001mbs.decorator';
import { Role001mbs } from 'src/role001mbs/role001mbs.enum';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';
import {  UserService } from 'src/service/user.service';

@ApiBearerAuth()
@Controller('/wdinext/api/users')
export class UserController {
	constructor(private readonly userService: UserService) { }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post("")
	create(@Body() userDTO: UserDTO): Promise<Users001mb> {
		return this.userService.create(userDTO);
	}

	@hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Put("change")
	update(@Body() userDTO: UserDTO): Promise<Users001mb> {
		return this.userService.change(userDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	// @UseGuards(JwtAuthGuard, Role001mbsGuard)
	// @Put("updateRole")
	// updateRole(@Body() roleid: any): Promise<Users001mb> {
	// 	return this.userService.updateRole(roleid);
	// }


	// @hasRole(Role001mbs.superadmin)
	// @UseGuards(JwtAuthGuard, Role001mbsGuard)
	// @Post('updateUserName')
	// updateUserName(@Body() userName: any): Promise<Users001mb> {
	// 	return this.userService.updateUserName(userName);
	// }

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post('')
	updatePassword(@Body() userDTO: UserDTO): Promise<Users001mb> {
		return this.userService.changePassword(userDTO);
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get('')
	findAll(): Promise<Users001mb[]> {
		return this.userService.findAll();
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get(':Id')
	findOne(@Param('usersId') usersId: number): Promise<Users001mb> {
		return this.userService.findOne(usersId);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Delete(':id')
	remove(@Param('id') id: number): Promise<void> {
		return this.userService.remove(id);
	}
}

