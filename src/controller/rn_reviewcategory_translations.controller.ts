import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnCategoryTranslationsDTO } from 'src/dto/rn_reviewcurrency_translations.dto';
import { RnCategoryTranslations } from 'src/entity/rn_reviewcategory_translations.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCategoryTranslationsService } from 'src/service/rn_reviewcategory_translations.service';


@ApiBearerAuth()
@Controller('/api/reviewcategorytranslations')
export class RnCategorytranslationsController {
	constructor(private readonly rnCategorytranslationsServices: RnCategoryTranslationsService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.create(rnCategoryTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.update(rnCategoryTranslationsDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnCategoryTranslations[]> {
		return this.rnCategorytranslationsServices.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnCategoryTranslations> {
		return this.rnCategorytranslationsServices.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnCategorytranslationsServices.remove(id);
	}
}

