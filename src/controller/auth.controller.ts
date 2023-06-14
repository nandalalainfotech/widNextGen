

import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';

@ApiBearerAuth()
@Controller('/wdinext/api/auth')
export class AuthController {
	constructor(private AuthService: AuthService) { }

	@Get('getUserAuthentication/:password/:username')
	getUserAuthentication(@Param('password') password: string, @Param('username') username: string, ): Promise<any> {
		return this.AuthService.getUserAuthentication(password, username);
		
	}

	// @UseGuards(JwtAuthGuard)
	// @Get('test')
	// async test() {
	// 	return 'Success!';
	// }
}