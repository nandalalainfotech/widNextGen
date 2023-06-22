import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnCategoriesDTO } from 'src/dto/rn_reviewcategories.dto';
import { RnCategories } from 'src/entity/rn_reviewcategories.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCategoriesService } from 'src/service/rn_reviewcategories.service';


@ApiBearerAuth()
@Controller('/wdinext/api/reviewcategories')
export class RnCategoriesController {
	constructor(private readonly rnCategoriesServices: RnCategoriesService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnCategoriesDTO: RnCategoriesDTO): Promise<RnCategories> {
		return this.rnCategoriesServices.create(rnCategoriesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnCategoriesDTO: RnCategoriesDTO): Promise<RnCategories> {
		return this.rnCategoriesServices.update(rnCategoriesDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnCategories[]> {
		return this.rnCategoriesServices.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnCategories> {
		return this.rnCategoriesServices.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnCategoriesServices.remove(id);
	}
}

