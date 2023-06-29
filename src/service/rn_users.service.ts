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

		 async create( users: Users): Promise<RnUsers> {
			 let  rnUsers = await this.rnUsersRepository.find({ relations: ["role"] });
			 for (let i = 0; i < rnUsers.length; i++) {
			 if (users.email.toLowerCase() == rnUsers[i].email.toLowerCase()) {
				throw new HttpException('email already exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}
		let rnUserss = new RnUsers();
		 	rnUserss.setProperties(users);
		 rnUserss.password = "wdinext001";
		const hash = await bcrypt.hash(rnUserss.password, this.saltRounds);
		rnUserss.password = hash;
		await this.rnUsersRepository.save(rnUserss);
		rnUserss.password = "";
		return rnUserss;
		 }


	async updateRole(users: Users): Promise<RnUsers> {
		const rnUsers = await this.rnUsersRepository.findOne({ relations: ["role"], where: { id: users.id } });
		rnUsers.roleId = users.roleId;
		let rnRoles = new RnRoles();
		rnRoles.id = users.id;
		return this.rnUsersRepository.save(rnUsers);
	}


	async update(users: Users): Promise<RnUsers> {
		let rnUser: RnUsers[] = [];
		rnUser = await this.rnUsersRepository.find({ relations: ["role"] });

		for (let i = 0; i < rnUser.length; i++) {
			if (users.email.toLowerCase() == rnUser[i].email.toLowerCase()) {
				throw new HttpException('Email Already Exist', HttpStatus.UNPROCESSABLE_ENTITY);
			}

		}
		const rnUsers = new RnUsers();
		rnUsers.setProperties(users);
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

