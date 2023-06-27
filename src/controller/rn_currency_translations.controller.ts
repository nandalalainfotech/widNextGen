import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnCurrencyTranslationsDTO } from 'src/dto/rn_currency_translations.dto';
import { RnCurrencyTranslations } from 'src/entity/rn_currency_translations.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCurrencyTranslationsService } from 'src/service/rn_currency_translations.service';


@ApiBearerAuth()
@Controller('/api/currencytranslations')
export class RnCurrencyTranslationsController {
	constructor(private readonly rnCurrencyTranslationsServices: RnCurrencyTranslationsService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO): Promise<RnCurrencyTranslations> {
		return this.rnCurrencyTranslationsServices.create(rnCurrencyTranslationsDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO): Promise<RnCurrencyTranslations> {
		return this.rnCurrencyTranslationsServices.update(rnCurrencyTranslationsDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnCurrencyTranslations[]> {
		return this.rnCurrencyTranslationsServices.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnCurrencyTranslations> {
		return this.rnCurrencyTranslationsServices.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnCurrencyTranslationsServices.remove(id);
	}
}

