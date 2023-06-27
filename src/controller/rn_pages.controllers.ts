import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnPageTranslationsDTO } from 'src/dto/rn_page_tanslations.dto';
import { RnPagesDTO } from 'src/dto/rn_pages.dto';
import { RnPageTranslations } from 'src/entity/rn_page_translations.entity';
import { RnPages } from 'src/entity/rn_pages.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnPageTranslationsService } from 'src/service/rn_page_translations.service';
import { RnPagesService } from 'src/service/rn_pages.service';


@ApiBearerAuth()
@Controller('/api/pages')
export class RnPagesController {
	constructor(private readonly rnUPagesService: RnPagesService,
		private readonly rnUPageTranslationsService: RnPageTranslationsService) { }

	//-----------------------------page --------------------------------------
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Post("")
	create(@Body() rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		console.log("rnPagesDTO===>", rnPagesDTO);
		return this.rnUPagesService.create(rnPagesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Put("/:id")
	update(@Body() rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		return this.rnUPagesService.update(rnPagesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('/translations')
	findAll(): Promise<RnPages[]> {
		console.log("2222222222222");
		
		return this.rnUPagesService.findAll();
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('/pageTranslations')
	findPageTranslations(): Promise<RnPageTranslations[]> {
		console.log("11111111111");
		
		return this.rnUPageTranslationsService.findAll();
	}
	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnPages> {
		return this.rnUPagesService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnUPagesService.remove(id);
	}

	//-----------------------------page translations-----------------------------------------

	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create1(@Body() rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.create(rnPageTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update1(@Body() rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.update(rnPageTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne1(@Param('id') id: number): Promise<RnPageTranslations> {
		return this.rnUPageTranslationsService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove1(@Param('id') id: number): Promise<void> {
		return this.rnUPageTranslationsService.remove(id);
	}
}

