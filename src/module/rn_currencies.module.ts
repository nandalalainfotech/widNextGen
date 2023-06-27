import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RnCurrenciesController } from 'src/controller/rn_currencies.controller';
import { RnRolesController } from 'src/controller/rn_roles.controller';
import { RnUsersController } from 'src/controller/rn_users.controller';
import { RnCurrencies } from 'src/entity/rn_currencies.entity';
import { RnCurrencyTranslations } from 'src/entity/rn_currency_translations.entity';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { RolesGuard } from 'src/roles/role.guard';
import { RnCurrenciesService } from 'src/service/rn_currencies.service';
import { RnCurrencyTranslationsService } from 'src/service/rn_currency_translations.service';
import { RnRolesService } from 'src/service/rn_roles.service';
import { RnUsersService } from 'src/service/rn_users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RnCurrencies, RnCurrencyTranslations, RnRoles, RnUsers])],
  providers: [RnCurrenciesService, RnCurrencyTranslationsService,RnUsersService, RnRolesService, RolesGuard],
  controllers: [RnCurrenciesController, RnRolesController, RnUsersController],
})
export class RnCurrenciesModule { }