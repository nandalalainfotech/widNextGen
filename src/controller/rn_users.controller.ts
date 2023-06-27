import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Users } from 'src/dto/rn_users.dto';
import { RnUsers } from 'src/entity/rn_users.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnUsersService } from 'src/service/rn_users.service';
var path = require('path');
const fs = require('fs')

@ApiBearerAuth()
@Controller('/api/users')
export class RnUsersController {
	constructor(private readonly rnUsersService: RnUsersService) { }

	

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post('')
	 create(@Body() users: Users ): Promise<RnUsers> {	
		return this.rnUsersService.create(users);
	 }
	

// 	 @Post('/register')
// async register(@Body() user: UserCreateDto): Promise<UserModel> {
//   return await this.userRepository.create(user);
// } 

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Put("/:id")
	update(@Body() users: Users): Promise<RnUsers> {
		console.log("users=====11", users);
		
		return this.rnUsersService.update(users);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnUsers[]> {
		return this.rnUsersService.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: string): Promise<RnUsers> {
		
		return this.rnUsersService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.rnUsersService.remove(id);
	}
}

