import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersDTO } from 'src/dto/Users.dto';
import { Users001mb } from 'src/entity/Users001mb';
import { hasRole } from 'src/role001mbs/role001mbs.decorator';
import { Role001mbs } from 'src/role001mbs/role001mbs.enum';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';
import { UsersService } from 'src/service/users.service';

@ApiBearerAuth()
@Controller('/wdinext/api/user')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }
	// --------------------------user registration-------------
	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post("Registersave")
	create1(@Body() usersDTO: UsersDTO): Promise<Users001mb> {
		return this.usersService.create(usersDTO);
		
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get('registerfindAll')
	findAll1(): Promise<Users001mb[]> {
		return this.usersService.findAll();
	}
	// --------------------------user registration end-------------
	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post("save")
	create(@Body() usersDTO: UsersDTO): Promise<Users001mb> {
		console.log("Users001mb==>01", Users001mb);
		return this.usersService.create(usersDTO);
	}

	@hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Put("update")
	update(@Body() usersDTO: UsersDTO): Promise<Users001mb> {
		return this.usersService.update(usersDTO);
	}

	@hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Put("updateRole")
	updateRole(@Body() roleid: any): Promise<Users001mb> {
		return this.usersService.updateRole(roleid);
	}

	// @hasRole(Role.superadmin)
	// @UseGuards(JwtAuthGuard, RolesGuard)
	// @Post("updateUserTheme")
	// updateUserTheme(@Body() updateTheme: any): Promise<User001mb> {
	// 	return this.userService.update1(updateTheme);
	// }

	@hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post('updateUserName')
	updateUserName(@Body() userName: any): Promise<Users001mb> {
		return this.usersService.updateUserName(userName);
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Post('updatePassword')
	updatePassword(@Body() usersDTO: UsersDTO): Promise<Users001mb> {
		return this.usersService.updatePassword(usersDTO);
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get('findAll')
	findAll(): Promise<Users001mb[]> {
		console.log("Users001m===>", Users001mb);
		return this.usersService.findAll();
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Get(':usersId')
	findOne(@Param('usersId') usersId: number): Promise<Users001mb> {
		return this.usersService.findOne(usersId);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard, Role001mbsGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.usersService.remove(id);
	}
}

