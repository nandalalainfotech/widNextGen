import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnLanguagesDTO } from 'src/dto/rn_languages.dto';
import { RnLanguages } from 'src/entity/rn_languages';
import { RnLanguagesService } from 'src/service/rn_languages.service';



@ApiBearerAuth()
@Controller('/wdinext/api/languages')
export class RnLanguagesController {
    constructor(private readonly rnLanguagesService: RnLanguagesService) { }


    @UseGuards(JwtAuthGuard)
    // @hasRole(Role.superadmin)
    @Post("")
    create(@Body() rnLanguagesDTO: RnLanguagesDTO): Promise<RnLanguages> {
        return this.rnLanguagesService.create(rnLanguagesDTO);
    }

    @UseGuards(JwtAuthGuard)
    // @hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
    @Get("")
    findAll(): Promise<RnLanguages[]> {
        return this.rnLanguagesService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    //  @hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
    @Put("/:id")
    update(@Body() RnLanguages: RnLanguages): Promise<RnLanguages> {
        return this.rnLanguagesService.update(RnLanguages);
    }

    @UseGuards(JwtAuthGuard)
    //  @hasRole(Role.superadmin)
    @Get('/:id')
    findOne(@Param('id') id: number): Promise<RnLanguages> {
        return this.rnLanguagesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    //  @hasRole(Role.superadmin)
    @Delete('/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.rnLanguagesService.remove(id);
    }



}