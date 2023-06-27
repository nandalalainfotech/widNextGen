import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnPermissionsDTO } from 'src/dto/rn_permissions.dto';
import { RnPermissions } from 'src/entity/rn_permissions.entity';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';


@Injectable()
export class RnPermissionsService {

	saltRounds = 10;
	users001mb: any;

	constructor(private mailService: MailService,
		@InjectRepository(RnPermissions) private readonly rnPermissionsRepository: Repository<RnPermissions>) { }


	async findAll(): Promise<RnPermissions[]> {
		console.log("RnPermissions==11", RnPermissions);
		return this.rnPermissionsRepository.find({ relations: ["role"] });
	}

	async update(rnPermissionsDTO: RnPermissionsDTO): Promise<RnPermissions> {
		const rnPermissions = new RnPermissions();
		rnPermissions.controller = rnPermissionsDTO.controller;
		rnPermissions.actionView = rnPermissionsDTO.actionView;
		rnPermissions.actionCreate = rnPermissionsDTO.actionCreate;
		rnPermissions.actionUpdate = rnPermissionsDTO.actionUpdate;
		rnPermissions.actionDelete = rnPermissionsDTO.actionDelete;
		rnPermissions.updatedBy = rnPermissionsDTO.updatedBy;
		rnPermissions.updatedAt = rnPermissionsDTO.updatedAt;
		console.log("rnPermissions===", rnPermissions);
		await this.rnPermissionsRepository.update({ id: rnPermissionsDTO.id }, rnPermissions);
		return rnPermissions;

	}



}

