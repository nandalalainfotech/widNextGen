import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/dto/User.dto';
import { Group001mb } from 'src/entity/Group001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { MailService } from 'src/mail/mail.service';
import { In, Repository } from 'typeorm';


@Injectable()
export class UserService {

	saltRounds = 10;
	users001mb: any;

	constructor(private mailService: MailService,
		@InjectRepository(Users001mb) private readonly userRepository: Repository<Users001mb>,
		@InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>,
		@InjectRepository(Group001mb) private readonly groupRepository: Repository<Group001mb>

	) { }


	async create(userDTO: UserDTO): Promise<Users001mb> {
		let users: Users001mb[] = [];
		users = await this.userRepository.find({ relations: ["role001mbs"] });
		for (let i = 0; i < users.length; i++) {
			if (userDTO.username.toLowerCase() == users[i].username.toLowerCase()) {
				throw new HttpException('User Name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("userDTO===============>13", userDTO);
		// let role = await this.roleRepository.findOne({ where: { roleId: userDTO.roleId } });
		// console.log("userDTO===============>14", role);
		// let group = await this.groupRepository.findOne({ where: { groupId: userDTO.groupid } });
		// console.log("group===============>15", group);
		const role = await this.roleRepository.find({ where: { roleId: In([userDTO.rolesId]) } });
		console.log("role===============>14", role);
		const group = await this.groupRepository.find({ where: { groupId: In([userDTO.groupsId]) } });
	
		console.log("group===============>15", group);

		const users001mb = new Users001mb();
		users001mb.setProperties(userDTO);
		console.log("userDTO===============>16", userDTO);
		users001mb.role001mbs = role;
		users001mb.group001mbs = group;
		users001mb.password = "wdinext001";
		const hash = await bcrypt.hash(users001mb.password, this.saltRounds);
		users001mb.password = hash;
		await this.userRepository.save(users001mb);
		users001mb.password = "";
		return users001mb;
	}

	// async updateRole(userDTO: UserDTO): Promise<Users001mb> {
	// 	const users001mb = await this.userRepository.findOne({ relations: ["role001mbs"], where: { userId: userDTO.userId } });
	// 	users001mb.roleId = userDTO.roleId;
	// 	let role001mb = new Role001mb();
	// 	role001mb.roleId = userDTO.roleId;
	// 	return this.userRepository.save(users001mb);
	// }


	async change(userDTO: UserDTO): Promise<Users001mb> {
		const users001mb = new Users001mb();
		users001mb.firstname = userDTO.firstname;
		users001mb.lastname = userDTO.lastname;
		users001mb.username = userDTO.username;
		users001mb.roleId = userDTO.roleId;
		users001mb.status = userDTO.status;
		users001mb.email = userDTO.email;

		users001mb.updatedUser = userDTO.updatedUser;
		users001mb.updatedDatetime = userDTO.updatedDatetime;
		users001mb.updatedUser = userDTO.updatedUser;
		users001mb.updatedDatetime = userDTO.updatedDatetime;

		await this.userRepository.update({ userId: userDTO.userId }, users001mb);
		return users001mb;

	}

	async changePassword(userDTO: UserDTO): Promise<Users001mb> {
		const hash = await bcrypt.hash(userDTO.password, this.saltRounds);
		userDTO.password = hash;
		const users001mb = await this.userRepository.findOne({ where: { userId: userDTO.userId } });
		users001mb.password = userDTO.password;
		users001mb.status = "A";
		return this.userRepository.save(users001mb);
	}


	// async updateUserName(user: any): Promise<Users001mb> {
	// 	const user001mb = await this.userRepository.findOne({ where: { userId: user.userId } });
	// 	user001mb.username = user.username;
	// 	return this.userRepository.save(user001mb);
	// }


	async findAll(): Promise<Users001mb[]> {
		console.log("Users001mb==11", Users001mb);
		return this.userRepository.find({ relations: ["role001mbs"] });
	}

	async findOne(usersId: number): Promise<Users001mb> {
		return this.userRepository.findOne(usersId);
	}

	async remove(id: number): Promise<void> {
		await this.userRepository.delete(id);

	}

}

