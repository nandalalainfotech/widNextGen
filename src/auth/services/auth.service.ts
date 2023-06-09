

import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { map } from 'rxjs/operators';
import { RnUsers } from 'src/entity/rn_users';
import { RnUsersDTO } from 'src/dto/rn_users.dto';

;


@Injectable()
export class AuthService {

	constructor(@InjectRepository(RnUsers) private readonly rnUsersRepository: Repository<RnUsers>,
		private readonly jwtService: JwtService) { }

	generateJwt(username, status, role): Observable<string> {
		const payload = {
			username: username, status: status, role: role
		};
		return from(this.jwtService.signAsync(payload));
	}

	async getUserAuthentication( password: string, username: string) {
		console.log("username,password==>",password, username);
		const rnUsers: RnUsers = await this.rnUsersRepository.findOne({ relations: [ 'role'], where: { username: username } });
		let rnUsersDTO = new RnUsersDTO();

		if (rnUsersDTO) {
			const isMatch = await bcrypt.compare(password, rnUsers.password);																																																							
			 if (rnUsers) {
				rnUsersDTO.setProperties(rnUsers);
				rnUsersDTO.password = null;
				
				return this.generateJwt(rnUsers.username, rnUsers.status, rnUsers.role).pipe(map((jwt: string) => {
					return { rnUsersDTO, access_token: jwt };
				})
				)
			} 
			// else {
			// 	// throw new UnauthorizedException("Invalid Password");
			// 	throw new HttpException('Invalid Password', HttpStatus.INTERNAL_SERVER_ERROR);
			// }
		} 
		else {
			throw new HttpException('Invalid Username', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
