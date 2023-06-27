import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/dto/rn_users.dto';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RnUsersService {

	saltRounds = 10;
	users001mb: any;
	roleRepository: any;

	constructor(
		@InjectRepository(RnUsers) private readonly rnUsersRepository: Repository<RnUsers>) { }


	async create(users: Users): Promise<RnUsers> {
		console.log("users", users);
		const rnUsers_test = await this.rnUsersRepository.find({ relations: ["role"], where: { email: users.email ? users.email : "" } });
		console.log("rnUsers_test", rnUsers_test.length);

		var phoneno = /^\d{10}$/;
		var emailtest = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

		if (users.firstName && users.mobile.match(phoneno) && users.email.match(emailtest) && rnUsers_test.length == 0) {
			const rnUsers = new RnUsers();
			rnUsers.setProperties(users);
			rnUsers.password = "wdinext001";
			const hash = await bcrypt.hash(rnUsers.password, this.saltRounds);
			rnUsers.password = hash;
			await this.rnUsersRepository.save(rnUsers);
			rnUsers.password = "";
			return rnUsers;
		} else {
			if (!users.email.match(emailtest)) {
				throw new HttpException({
					errors: {
						email: "please Enter valid email",
					}

				}, HttpStatus.UNPROCESSABLE_ENTITY);
			} else if (!users.mobile.match(phoneno)) {
				throw new HttpException({
					errors: {
						mobile: "please Enter Mobile Number",
					}

				}, HttpStatus.UNPROCESSABLE_ENTITY);
			} else if (!users.firstName) {
				throw new HttpException({
					errors: {
						firstName: "please Enter firstName",
					}

				}, HttpStatus.UNPROCESSABLE_ENTITY);
			} else {
				throw new HttpException({
					errors: {
						email: "Already Email saved",
					}

				}, HttpStatus.UNPROCESSABLE_ENTITY);
			}

		}


	}

	async updateRole(users: Users): Promise<RnUsers> {
		const rnUsers = await this.rnUsersRepository.findOne({ relations: ["role"], where: { id: users.id } });
		rnUsers.roleId = users.roleId;
		let rnRoles = new RnRoles();
		rnRoles.id = users.id;
		return this.rnUsersRepository.save(rnUsers);
	}


	async change(users: Users): Promise<RnUsers> {
		const rnUsers = new RnUsers();

		// this.firstName = rnUsersDTO.firstName;
		// this.lastName = rnUsersDTO.lastName;
		// this.username = rnUsersDTO.username;
		// this.password = rnUsersDTO.password;
		// this.mobile = rnUsersDTO.mobile;
		// this.status = rnUsersDTO.status;
		// this.email = rnUsersDTO.email;
		// this.createdBy = rnUsersDTO.createdBy;
		// this.createdAt = rnUsersDTO.createdAt;
		// this.updatedBy = rnUsersDTO.updatedBy;
		// this.updatedAt = rnUsersDTO.updatedAt;

		await this.rnUsersRepository.update({ id: users.id }, rnUsers);
		return rnUsers;

	}

	async changePassword(users: Users): Promise<RnUsers> {
		const hash = await bcrypt.hash(users.password, this.saltRounds);
		users.password = hash;
		const rnUsers = await this.rnUsersRepository.findOne({ where: { id: users.id } });
		rnUsers.password = users.password;
		rnUsers.status = 0;
		rnUsers.updatedBy = users.updatedBy;
		rnUsers.updatedAt = users.updatedAt;
		return this.rnUsersRepository.save(rnUsers);
	}

	async update(users: Users): Promise<RnUsers> {
		console.log("users======00", users);
		console.log("userDTO===============>12", users);
		let rnUser: RnUsers[] = [];
		rnUser = await this.rnUsersRepository.find({ relations: ["role"] });
		console.log("userDTO===============>13", users);

		for (let i = 0; i < rnUser.length; i++) {

			if (users.firstName.toLowerCase() == rnUser[i].firstName.toLowerCase()) {
				throw new HttpException('firstName already exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}
			if (users.password.toLowerCase() == rnUser[i].password.toLowerCase()) {
				throw new HttpException('password already exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}

			if (users.email.toLowerCase() == rnUser[i].email.toLowerCase()) {
				throw new HttpException('email already exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}

			if (users.mobile.toLowerCase() == rnUser[i].mobile.toLowerCase()) {
				throw new HttpException('mobileNo Already Exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}
		const rnUsers = new RnUsers();
		rnUsers.setProperties(users);
		rnUsers.updatedBy = users.updatedBy;
		rnUsers.updatedAt = users.updatedAt;
		await this.rnUsersRepository.update({ id: rnUsers.id }, rnUsers);
		return rnUsers;
	}

	async findAll(): Promise<RnUsers[]> {
		console.log("RnUsers==11", RnUsers);
		return this.rnUsersRepository.find({ relations: ["role"] });
	}

	async findOne(id: string): Promise<RnUsers> {
		return this.rnUsersRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.rnUsersRepository.delete(id);

	}

}

