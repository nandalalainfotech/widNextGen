import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnPermissionsDTO } from 'src/dto/rn_permissions.dto';
import { RnPermissions } from 'src/entity/rn_permissions';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';


@Injectable()
export class RnPermissionsService {

	saltRounds = 10;
	users001mb: any;

	constructor(private mailService: MailService,
		@InjectRepository(RnPermissions) private readonly rnPermissionsRepository: Repository<RnPermissions>) { }


	async findAll(): Promise<RnPermissions[]> {
		return this.rnPermissionsRepository.find({ relations: ["role"] });
	}

	async update(rnPermissionsDTO: RnPermissionsDTO): Promise<RnPermissions> {
		const rnPermissions = new RnPermissions();
		rnPermissions.permissionname = rnPermissionsDTO.permissionname;
		rnPermissions.updatedUser = rnPermissionsDTO.updatedUser;
		rnPermissions.updatedDatetime = rnPermissionsDTO.updatedDatetime;
		rnPermissions.updatedUser = rnPermissionsDTO.updatedUser;
		rnPermissions.updatedDatetime = rnPermissionsDTO.updatedDatetime;

		await this.rnPermissionsRepository.update({ prmsnId: rnPermissionsDTO.prmsnId }, rnPermissions);
		return rnPermissions;

	}



}

