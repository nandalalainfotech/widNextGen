import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { RnUsersDTO } from 'src/dto/rn_users.dto';
import { RnRoles } from 'src/entity/rn_roles';
import { RnUsers } from 'src/entity/rn_users';
import { MailService } from 'src/mail/mail.service';
import { In, Repository } from 'typeorm';


@Injectable()
export class RnUsersService {

	saltRounds = 10;
	users001mb: any;

	constructor(private mailService: MailService,
		@InjectRepository(RnUsers) private readonly rnUsersRepository: Repository<RnUsers>) { }


	async create(rnUsersDTO: RnUsersDTO): Promise<RnUsers> {
		let rnUser: RnUsers[] = [];
		rnUser = await this.rnUsersRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnUser.length; i++) {
			if (rnUsersDTO.username.toLowerCase() == rnUser[i].username.toLowerCase()) {
				throw new HttpException('User Name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
			if (rnUsersDTO.email.toLowerCase() == rnUser[i].email.toLowerCase()) {
				throw new HttpException('Email Address Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
			if (rnUsersDTO.mobileNo.toLowerCase() == rnUser[i].mobileNo.toLowerCase()) {
				throw new HttpException('Mobile Number Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("userDTO===============>13", rnUsersDTO);

		const rnUsers = new RnUsers();
		rnUsers.setProperties(rnUsersDTO);
		console.log("rnUser===============>14", rnUsers);
		rnUsers.password = "wdinext001";
		const hash = await bcrypt.hash(rnUsers.password, this.saltRounds);
		rnUsers.password = hash;
		console.log("rnUser===============>15", rnUsers);
		await this.rnUsersRepository.save(rnUsers);
		rnUsers.password = "";
		// rnUsers.originalfilename = file.filename;
		console.log("rnUsers===============>16", rnUsers);
		return rnUsers;
	}

	// async create(file: any, applicationlogosettingsDTO: ApplicationlogosettingsDTO,): Promise<ApplicationlogosettingsDTO> {
    //     const applicationlogosettings001mb = new Applicationlogosettings001mb();
    //     applicationlogosettings001mb.setProperties(applicationlogosettingsDTO);
    //     applicationlogosettings001mb.originalfilename = file.filename;
    //     return this.applicationlogosettingsRepository.save(applicationlogosettings001mb);
    // }

	async updateRole(rnUsersDTO: RnUsersDTO): Promise<RnUsers> {
		const rnUsers = await this.rnUsersRepository.findOne({ relations: ["role"], where: { userId: rnUsersDTO.userId } });
		rnUsers.roleId = rnUsersDTO.roleId;
		let rnRoles = new RnRoles();
		rnRoles.roleId = rnUsersDTO.roleId;
		return this.rnUsersRepository.save(rnUsers);
	}


	async change(rnUsersDTO: RnUsersDTO): Promise<RnUsers> {
		const rnUsers = new RnUsers();
		rnUsers.firstname = rnUsersDTO.firstname;
		rnUsers.lastname = rnUsersDTO.lastname;
		rnUsers.username = rnUsersDTO.username;
		rnUsers.roleId = rnUsersDTO.roleId;
		rnUsers.status = rnUsersDTO.status;
		rnUsers.email = rnUsersDTO.email;
		rnUsers.updatedUser = rnUsersDTO.updatedUser;
		rnUsers.updatedDatetime = rnUsersDTO.updatedDatetime;
		rnUsers.updatedUser = rnUsersDTO.updatedUser;
		rnUsers.updatedDatetime = rnUsersDTO.updatedDatetime;

		await this.rnUsersRepository.update({ userId: rnUsersDTO.userId }, rnUsers);
		return rnUsers;

	}

	async changePassword(rnUsersDTO: RnUsersDTO): Promise<RnUsers> {
		const hash = await bcrypt.hash(rnUsersDTO.password, this.saltRounds);
		rnUsersDTO.password = hash;
		const rnUsers = await this.rnUsersRepository.findOne({ where: { userId: rnUsersDTO.userId } });
		rnUsers.password = rnUsersDTO.password;
		rnUsers.status = "A";
		return this.rnUsersRepository.save(rnUsers);
	}


	async findAll(): Promise<RnUsers[]> {
		console.log("RnUsers==11", RnUsers);
		return this.rnUsersRepository.find({ relations: ["role"] });
	}

	async findOne(usersId: number): Promise<RnUsers> {
		return this.rnUsersRepository.findOne(usersId);
	}

	async remove(id: number): Promise<void> {
		await this.rnUsersRepository.delete(id);

	}

}

