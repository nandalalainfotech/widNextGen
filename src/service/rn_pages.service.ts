import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnPagesDTO } from 'src/dto/rn_pages.dto';
import { RnPages } from 'src/entity/rn_pages.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnPagesService {
	constructor(@InjectRepository(RnPages) private readonly rnPagesRepository: Repository<RnPages>,
    @InjectRepository(RnUsers) private readonly rnUserRepository: Repository<RnUsers>) { }

	// async create(rnPagesDTO: RnPagesDTO): Promise<RnPages> {
	// 	const rnPages = new RnPages();
	// 	rnPages.setProperties(rnPagesDTO);
	// 	return this.rnPagesRepository.save(rnPages);
	// }

    
	async create(rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		let rnPages: RnPages[] = [];
		rnPages = await this.rnPagesRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnPages.length; i++) {
			if (rnPagesDTO.type.toLowerCase() == rnPages[i].type.toLowerCase()) {
				throw new HttpException('type Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnPagesDTO===============>13", rnPagesDTO);

		const rnLanguages = new RnPages();
		rnLanguages.setProperties(rnPagesDTO);
		await this.rnPagesRepository.save(rnLanguages);
		return rnLanguages;
	}
	async update(rnPagesDTO: RnPagesDTO): Promise<RnPages> {
		const rnPages = new RnPages();
		rnPages.setProperties(rnPagesDTO);
		await this.rnPagesRepository.update({ roleId: rnPages.roleId }, rnPages);
		return rnPages;
	}

	async findAll(): Promise<RnPages[]> {
		return this.rnPagesRepository.find();
	}
	async findOne(roleId: number): Promise<RnPages> {
		return this.rnPagesRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnPagesRepository.delete(id);
	}
}