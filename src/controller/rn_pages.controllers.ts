import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnPagesDTO } from 'src/dto/rn_pages.dto';
import { RnPages } from 'src/entity/rn_pages';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPagesService } from 'src/service/rn_pages.service';


@ApiBearerAuth()
@Controller('/wdinext/api/pages')
export class RnPagesController {
	constructor(private readonly rnUPagesService: RnPagesService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		return this.rnUPagesService.create(rnPagesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		return this.rnUPagesService.update(rnPagesDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnPages[]> {
		return this.rnUPagesService.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnPages> {
		return this.rnUPagesService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnUPagesService.remove(id);
	}
}

