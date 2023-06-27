

import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Like, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { map } from 'rxjs/operators';
import { RnUsers } from 'src/entity/rn_users.entity';
import { Users } from 'src/dto/rn_users.dto';

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
		console.log("email,password==>",password, username);
		const rnUsers: RnUsers = await this.rnUsersRepository.findOne({ relations: [ 'role'], where: { username: username } });
    console.log("rnUsers==>", rnUsers);
		let users = new Users();

		if (users) {
			const isMatch = await bcrypt.compare(password, rnUsers.password);																																																							
			 if (rnUsers) {
				users.setProperties(rnUsers);
				users.password = null;
        console.log("(rnUsers.username, rnUsers.status, rnUsers.role==>0", (rnUsers.username, rnUsers.status, rnUsers.role));
				return this.generateJwt(rnUsers.username, rnUsers.status, rnUsers.role).pipe(map((jwt: string) => {
					return { users, access_token: jwt };
				})
				)
			} 
			else {
				// throw new UnauthorizedException("Invalid Password");
				throw new HttpException('Invalid Password', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}
	async validateUser( password: string, email: string) {
		if(password && email){
			const rnUsers: RnUsers = await this.rnUsersRepository.findOne({ relations: [ 'role'], where: { email: email } });
			let users = new Users();
			if(rnUsers){
				if(rnUsers.password == password){
					if (users) {																																																						
						 if (rnUsers) {
							users.setProperties(rnUsers);
							users.password = null;
							console.log("(rnUsers.username, rnUsers.status, rnUsers.role==>0", (rnUsers.username, rnUsers.status, rnUsers.role));
							return this.generateJwt(rnUsers.username, rnUsers.status, rnUsers.role).pipe(map((jwt: string) => {
								return { users, access_token: jwt };
							})
							)
						} 
						else {
							// throw new UnauthorizedException("Invalid Password");
							throw new HttpException('Invalid Password', HttpStatus.UNPROCESSABLE_ENTITY);
						}
					}
				}else{
					throw new HttpException({
						message:'Invalid Password',
						errors:{
							email:"please Enter Valid Password"
						}
						
					}, HttpStatus.UNPROCESSABLE_ENTITY);
				}

			}else{
				throw new HttpException({
					message:'Invalid Email',
					errors:{
						email:"please Enter Valid Email"
					}
					
				}, HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}else{
			throw new HttpException({
				message:'Invalid Data',
				errors:{
					email:"please Enter Valid Email",
					password:"please Enter Valid Password"
				}
				
			}, HttpStatus.UNPROCESSABLE_ENTITY);

		}
		
	}
	
		
}

