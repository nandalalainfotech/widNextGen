import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RnUsersDTO } from 'src/dto/rn_users.dto';
import { RnUsers } from 'src/entity/rn_users.entity';
import { hasRole } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';
import { RnUsersService } from 'src/service/rn_users.service';
var path = require('path');
const fs = require('fs')

@ApiBearerAuth()
@Controller('/wdinext/api/users')
export class RnUsersController {
	constructor(private readonly rnUsersService: RnUsersService) { }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Post("")
	create(@Body() rnUsersDTO: RnUsersDTO): Promise<RnUsers> {

		return this.rnUsersService.create(rnUsersDTO);
	}

	// @Post('upload')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file: Express.Multer.File, @Body() applicationlogoSettingsDTO: ApplicationlogosettingsDTO) {
    //     return this.applicationlogoSettingsService.create(file, applicationlogoSettingsDTO);
    // }				

	// @Get('download/:originalfilename')
    // download(@Param() originalfilename: any, @Req() request: Request, @Res() response: Response) {
    //     var filePath = path.join(`./uploads/`) + originalfilename.originalfilename;
    //     const filestream = createReadStream(filePath);
    //     filestream.pipe(response);
    // }

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin)
	@Put("/:id")
	update(@Body() rnUsersDTO: RnUsersDTO): Promise<RnUsers> {
		return this.rnUsersService.change(rnUsersDTO);
	}


	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin, Role.admin, Role.user, Role.guest)
	@Get('')
	findAll(): Promise<RnUsers[]> {
		return this.rnUsersService.findAll();
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Get('/:id')
	findOne(@Param('id') id: number): Promise<RnUsers> {
		
		return this.rnUsersService.findOne(id);
	}

	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@hasRole(Role.superadmin)
	@Delete('/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.rnUsersService.remove(id);
	}
}

