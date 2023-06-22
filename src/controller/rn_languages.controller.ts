import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnLanguagesDTO } from 'src/dto/rn_languages.dto';
import { RnLanguages } from 'src/entity/rn_languages.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnLanguagesService } from 'src/service/rn_languages.service';



@ApiBearerAuth()
@Controller('/wdinext/api/languages')
export class RnLanguagesController {
    constructor(private readonly rnLanguagesService: RnLanguagesService) { }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @hasRole(Role.superadmin)
    @Post("")
    create(@Body() rnLanguagesDTO: RnLanguagesDTO): Promise<RnLanguages> {
        return this.rnLanguagesService.create(rnLanguagesDTO);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
     @hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
    @Get("")
    findAll(): Promise<RnLanguages[]> {
        return this.rnLanguagesService.findAll();
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
      @hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
    @Put("/:id")
    update(@Body() RnLanguages: RnLanguages): Promise<RnLanguages> {
        return this.rnLanguagesService.update(RnLanguages);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
      @hasRole(Role.superadmin)
    @Get('/:id')
    findOne(@Param('id') id: number): Promise<RnLanguages> {
        return this.rnLanguagesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
      @hasRole(Role.superadmin)
    @Delete('/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.rnLanguagesService.remove(id);
    }



}