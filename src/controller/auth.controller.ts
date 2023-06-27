

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { Users } from 'src/dto/rn_users.dto';
import { RnUsers } from 'src/entity/rn_users.entity';

@ApiBearerAuth()
@Controller('/api/auth')
export class AuthController {
	constructor(private authService: AuthService,
   ) { }

	// @Get('getUserAuthentication/:password/:username')
	// getUserAuthentication(@Param('password') password: string, @Param('username') username: string, ): Promise<any> {
	// 	return this.authService.getUserAuthentication(password, username);
	// }
	
  @Post('login')
async create(@Body() users: Users ): Promise<any> {
	const user = await this.authService.validateUser(users. password,users. email);
 return user;

}

	@UseGuards(JwtAuthGuard)
	@Get('test')
	async test() {
		return 'Success!';
	}
}