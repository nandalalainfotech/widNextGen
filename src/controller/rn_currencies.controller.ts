import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnCurrenciesDTO } from 'src/dto/rn_currencies.dto';
import { RnCurrencies } from 'src/entity/rn_currencies.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCurrenciesService } from 'src/service/rn_currencies.service';


@ApiBearerAuth()
@Controller('/wdinext/api/currencies')
export class RnCurrenciesController {
	constructor(private readonly rnCurrenciesServices: RnCurrenciesService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnCurrenciesDTO: RnCurrenciesDTO): Promise<RnCurrencies> {
		return this.rnCurrenciesServices.create(rnCurrenciesDTO);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnCurrenciesDTO: RnCurrenciesDTO): Promise<RnCurrencies> {
		return this.rnCurrenciesServices.update(rnCurrenciesDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnCurrencies[]> {
		return this.rnCurrenciesServices.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnCurrencies> {
		return this.rnCurrenciesServices.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnCurrenciesServices.remove(id);
	}
}
