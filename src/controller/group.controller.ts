import { Body, Controller, Get,Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GroupDTO } from 'src/dto/Group.dto';
import { Group001mb } from 'src/entity/Group001mb';
import { GroupService } from 'src/service/group.service';





@ApiBearerAuth()
@Controller('/wdinext/api/group')
export class GroupController {
    constructor(private readonly groupService: GroupService) { }

    // @hasRole(Role001mbs.superadmin)
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() groupDTO: GroupDTO): Promise<Group001mb> {
        return this.groupService.create(groupDTO);
    }

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() groupDTO: GroupDTO): Promise<Group001mb> {
		return this.groupService.update(groupDTO);
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Group001mb[]> {
		console.log("Role001mb==>22", Group001mb);
		return this.groupService.findAll();
	}

	// @hasRole(Role001mbs.superadmin)
	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.groupService.remove(id);
	}
    


}

