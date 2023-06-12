import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UsersDTO } from 'src/dto/Users.dto';
import { Group001mb } from 'src/entity/Group001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { MailService } from 'src/mail/mail.service';
import { Repository, getConnection } from 'typeorm';


@Injectable()
export class UsersService {

	saltRounds = 10;

	constructor(private mailService: MailService,
		@InjectRepository(Users001mb) private readonly usersRepository: Repository<Users001mb>,
		@InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>,
		@InjectRepository(Group001mb) private readonly groupRepository: Repository<Group001mb>
	) { }



	async create(usersDTO: UsersDTO): Promise<Users001mb> {
		let users: Users001mb[] = [];
		users = await this.usersRepository.find({ relations: ["role001mbs"] });
		for (let i = 0; i < users.length; i++) {
			if (usersDTO.username.toLowerCase() == users[i].username.toLowerCase()) {
				throw new HttpException('User Name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		let role = await this.roleRepository.findOne({ where: { roleId: usersDTO.roleId } });
		let group = await this.groupRepository.findOne({ where: { groupId: usersDTO.groupid } });
		const users001mb = new Users001mb();
		users001mb.setProperties(usersDTO);
		users001mb.role001mbs = [role];
		users001mb.group001mbs = [group];
		users001mb.password = "wdinext001";
		const hash = await bcrypt.hash(users001mb.password, this.saltRounds);
		users001mb.password = hash;
		await this.usersRepository.save(users001mb);
		users001mb.password = "";
		return users001mb;
	}

	async updateRole(usersDTO: UsersDTO): Promise<Users001mb> {
		const users001mb = await this.usersRepository.findOne({ relations: ["role001mbs"], where: { userId: usersDTO.userId } });
		users001mb.roleId = usersDTO.roleId;
		let role001mb = new Role001mb();
		role001mb.roleId = usersDTO.roleId;
		return this.usersRepository.save(users001mb);
	}


	async update(usersDTO: UsersDTO): Promise<Users001mb> {
		const users001mb = new Users001mb();
		users001mb.firstname = usersDTO.firstname;
		users001mb.lastname = usersDTO.lastname;
		users001mb.username = usersDTO.username;
		users001mb.roleId = usersDTO.roleId;
		users001mb.status = usersDTO.status;
		users001mb.email = usersDTO.email;

		users001mb.updatedUser = usersDTO.updatedUser;
		users001mb.updatedDatetime = usersDTO.updatedDatetime;
		users001mb.updatedUser = usersDTO.updatedUser;
		users001mb.updatedDatetime = usersDTO.updatedDatetime;

		await this.usersRepository.update({ userId: usersDTO.userId }, users001mb);
		return users001mb;

	}

	async updatePassword(usersDTO: UsersDTO): Promise<Users001mb> {
		const hash = await bcrypt.hash(usersDTO.password, this.saltRounds);
		usersDTO.password = hash;
		const users001mb = await this.usersRepository.findOne({ where: { userId: usersDTO.userId } });
		users001mb.password = usersDTO.password;
		users001mb.status = "A";
		return this.usersRepository.save(users001mb);
	}

	
	async updateUserName(user: any): Promise<Users001mb> {
		const user001mb = await this.usersRepository.findOne({ where: { userId: user.userId } });
		user001mb.username = user.username;
		return this.usersRepository.save(user001mb);
	}


	async findAll(): Promise<Users001mb[]> {
		console.log("Users001mb==11", Users001mb);
		return this.usersRepository.find({ relations: ["role001mbs"] });
	}

	async findOne(usersId: number): Promise<Users001mb> {
		return this.usersRepository.findOne(usersId);
	}

	async remove(id: number): Promise<void> {
		await this.usersRepository.delete(id);
	
	}

}