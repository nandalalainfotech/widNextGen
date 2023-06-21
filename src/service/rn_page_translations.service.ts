import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnPageTranslationsDTO } from 'src/dto/rn_page_tanslations.dto';
import { RnPageTranslations } from 'src/entity/rn_page_translations';
import { RnUsers } from 'src/entity/rn_users';
import { Repository } from 'typeorm';

@Injectable()
export class RnPageTranslationsService {
	constructor(@InjectRepository(RnPageTranslations) private readonly rnPageTranslationsRepository: Repository<RnPageTranslations>,
    @InjectRepository(RnUsers) private readonly rnUserRepository: Repository<RnUsers>) { }

    
	async create(rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		let rnPageTranslations: RnPageTranslations[] = [];
		rnPageTranslations = await this.rnPageTranslationsRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnPageTranslations.length; i++) {
			if (rnPageTranslationsDTO.pageId.toLowerCase() == rnPageTranslations[i].pageId.toLowerCase()) {
				throw new HttpException('pageId Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnPageTranslationsDTO===============>13", rnPageTranslationsDTO);

		const rnPagetranslations = new RnPageTranslations();
		rnPagetranslations.setProperties(rnPageTranslationsDTO);
		await this.rnPageTranslationsRepository.save(rnPagetranslations);
		return rnPagetranslations;
	}
	async update(rnPageTranslationsDTO: RnPageTranslationsDTO): Promise<RnPageTranslations> {
		const rnPageTranslations = new RnPageTranslations();
		rnPageTranslations.setProperties(rnPageTranslationsDTO);
		await this.rnPageTranslationsRepository.update({ roleId: rnPageTranslations.roleId }, rnPageTranslations);
		return rnPageTranslations;
	}

	async findAll(): Promise<RnPageTranslations[]> {
		return this.rnPageTranslationsRepository.find();
	}
	async findOne(roleId: number): Promise<RnPageTranslations> {
		return this.rnPageTranslationsRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnPageTranslationsRepository.delete(id);
	}
}