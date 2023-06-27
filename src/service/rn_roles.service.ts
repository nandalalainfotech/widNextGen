import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnRolesDTO } from 'src/dto/rn_roles.dto';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnRolesService {
	constructor(@InjectRepository(RnRoles) private readonly rnRoleRepository: Repository<RnRoles>) { }

	async create(rnRolesDTO: RnRolesDTO): Promise<RnRoles> {
		const rnRoles = new RnRoles();
		rnRoles.setProperties(rnRolesDTO);
		return this.rnRoleRepository.save(rnRoles);
	}
	async update(rnRolesDTO: RnRolesDTO): Promise<RnRoles> {
		const rnRoles = new RnRoles();
		rnRoles.setProperties(rnRolesDTO);
		await this.rnRoleRepository.update({ id: rnRoles.id }, rnRoles);
		return rnRoles;
	}

	async findAll(): Promise<RnRoles[]> {
		return this.rnRoleRepository.find();
	}
	async findOne(roleId: number): Promise<RnRoles> {
		return this.rnRoleRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnRoleRepository.delete(id);
	}
}