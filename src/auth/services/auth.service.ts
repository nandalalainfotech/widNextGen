

import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { map } from 'rxjs/operators';
import { Users001mb } from 'src/entity/Users001mb';
import { UsersDTO } from 'src/dto/Users.dto';
;


@Injectable()
export class AuthService {

	constructor(@InjectRepository(Users001mb) private readonly usersRepository: Repository<Users001mb>,
		private readonly jwtService: JwtService) { }

	generateJwt(username, status, role001mbs): Observable<string> {
		const payload = {
			username: username, status: status, role: role001mbs
		};
		return from(this.jwtService.signAsync(payload));
	}

	async getUserAuthentication( password: string, username: string) {
		console.log("username,password==>",password, username);
		const users001mb: Users001mb = await this.usersRepository.findOne({ relations: [ 'role001mbs'], where: { username: username } });
		let usersDTO = new UsersDTO();

		if (users001mb) {
			const isMatch = await bcrypt.compare(password, users001mb.password);																																																							
			 if (users001mb) {
				usersDTO.setProperties(users001mb);
				usersDTO.password = null;
				
				return this.generateJwt(users001mb.username, users001mb.status, users001mb.role001mbs).pipe(map((jwt: string) => {
					return { usersDTO, access_token: jwt };
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
