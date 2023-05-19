

import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { map } from 'rxjs/operators';
import { User001mb } from 'src/entity/User001mb';
import { UserDTO } from 'src/dto/User.dto';


@Injectable()
export class AuthService {

	constructor(@InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
		private readonly jwtService: JwtService) { }

	generateJwt(username, status, role): Observable<string> {
		const payload = {
			username: username, status: status, role: role
		};
		return from(this.jwtService.signAsync(payload));
	}

	async getUserAuthentication( password: string, username: string) {
		// console.log("username,password", username,password);
		const user001mb: User001mb = await this.userRepository.findOne({ relations: [ 'role'], where: { username: username } });
		let userDTO = new UserDTO();

		if (user001mb) {
			const isMatch = await bcrypt.compare(username, user001mb.username);

			// if (unitdeptslno != user001mb.unitslno) {
			// 	throw new HttpException('Please Select Correct Unit', HttpStatus.INTERNAL_SERVER_ERROR);
			// }
			// else if (dpslno != user001mb.dpslno2.slNo) {
			// 	throw new HttpException('Please Select Correct Department', HttpStatus.INTERNAL_SERVER_ERROR);
			// }
			// else
			 if (user001mb) {
				userDTO.setProperties(user001mb);
				userDTO.password = null;
				return this.generateJwt(user001mb.username, user001mb.status, user001mb.role.rolename).pipe(map((jwt: string) => {
					return { userDTO, access_token: jwt };
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
