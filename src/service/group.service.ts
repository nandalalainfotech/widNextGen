import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupDTO } from 'src/dto/Group.dto';
import { Group001mb } from 'src/entity/Group001mb';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
    constructor(@InjectRepository(Group001mb) private readonly groupRepository: Repository<Group001mb>) { }
    
    async create(groupDTO: GroupDTO): Promise<Group001mb> {
		const group001mb = new Group001mb();
		group001mb.setProperties(groupDTO);
		return this.groupRepository.save(group001mb);
	}
	async update(groupDTO: GroupDTO): Promise<Group001mb> {
		const group001mb = new Group001mb();
		group001mb.setProperties(groupDTO);
		await this.groupRepository.update({ groupId: group001mb.groupId }, group001mb);
		return group001mb;
	}

	async findAll(): Promise<Group001mb[]> {
		return this.groupRepository.find();
	}

	async remove(id: number): Promise<void> {
		await this.groupRepository.delete(id);
	}
}