import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnPageTranslationsDTO } from 'src/dto/rn_page_tanslations.dto';
import { RnPageTranslations } from 'src/entity/rn_page_translations';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPageTranslationsService } from 'src/service/rn_page_translations.service';


@ApiBearerAuth()
@Controller('/wdinext/api/pagetranslations')
export class RnPageTranslationsController {
	constructor(private readonly rnUPageTranslationsService: RnPageTranslationsService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.create(rnPageTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.update(rnPageTranslationsDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnPageTranslations[]> {
		return this.rnUPageTranslationsService.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnUPageTranslationsService.remove(id);
	}
}