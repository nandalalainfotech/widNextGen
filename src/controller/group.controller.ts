import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GroupDTO } from 'src/dto/Group.dto';
import { Group001mb } from 'src/entity/Group001mb';
import { GroupService } from 'src/service/group.service';





@ApiBearerAuth()
@Controller('/wdinext/api/groups')
export class GroupController {
	constructor(private readonly groupService: GroupService) { }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Post("")
	create(@Body() groupDTO: GroupDTO): Promise<Group001mb> {
		return this.groupService.create(groupDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Put(":id")
	update(@Body() groupDTO: GroupDTO): Promise<Group001mb> {
		return this.groupService.update(groupDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Get('')
	findAll(): Promise<Group001mb[]> {
		return this.groupService.findAll();
	}

	// @hasRole(Role001mbs.superadmin, Role001mbs.admin, Role001mbs.user, Role001mbs.guest)
	@UseGuards(JwtAuthGuard)
	@Get(':Id')
	findOne(@Param('groupId') groupId: number): Promise<Group001mb> {
		return this.groupService.findOne(groupId);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: number): Promise<void> {
		return this.groupService.remove(id);
	}



}

