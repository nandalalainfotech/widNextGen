import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnCategoriesDTO } from 'src/dto/rn_reviewcategories.dto';
import { RnCategoryTranslationsDTO } from 'src/dto/rn_reviewcurrency_translations.dto';
import { RnCategories } from 'src/entity/rn_reviewcategories.entity';
import { RnCategoryTranslations } from 'src/entity/rn_reviewcategory_translations.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCategoriesService } from 'src/service/rn_reviewcategories.service';
import { RnCategoryTranslationsService } from 'src/service/rn_reviewcategory_translations.service';


@ApiBearerAuth()
@Controller('/api/reviewcategories')
export class RnCategoriesController {
	constructor(private readonly rnCategoriesServices: RnCategoriesService,
		private readonly rnCategorytranslationsServices: RnCategoryTranslationsService) { }

	
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

	//--------------------------review category translations----------------------------

		
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create1(@Body() rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.create(rnCategoryTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update1(@Body() rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.update(rnCategoryTranslationsDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll1(): Promise<RnCategoryTranslations[]> {
		return this.rnCategorytranslationsServices.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne1(@Param('id') id: number): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove1(@Param('id') id: number): Promise<void> {
		return this.rnCategorytranslationsServices.remove(id);
	}
}

