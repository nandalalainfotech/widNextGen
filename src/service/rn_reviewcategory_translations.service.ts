import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnCategoryTranslationsDTO } from 'src/dto/rn_category_translations.dto';
import { RnCategoryTranslations } from 'src/entity/rn_reviewcategory_translations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnCategoryTranslationsService {
    roleRepository: any;
    rnRoleRepository: any;
    rnCategoryRepository: any;
	constructor(@InjectRepository(RnCategoryTranslations) private readonly rnCategoryTranslationsRepository: Repository<RnCategoryTranslations>) { }

    
	async create(rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		let rnCategoryTranslations: RnCategoryTranslations[] = [];
		rnCategoryTranslations = await this.rnCategoryTranslationsRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnCategoryTranslations.length; i++) {
			if (rnCategoryTranslationsDTO.name.toLowerCase() == rnCategoryTranslations[i].name.toLowerCase()) {
				throw new HttpException('name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnCategoryTranslationsDTO===============>226", rnCategoryTranslationsDTO);
        let role = await this.rnRoleRepository.findOne({ where: { roleId: rnCategoryTranslationsDTO.roleId } });
        console.log("role===============>226", role);
        let category = await this.rnCategoryRepository.findOne({ where: { categoryId: rnCategoryTranslationsDTO.categoryId } });
        console.log("category===============>226", category);
		const rnCategoryTranslationss = new RnCategoryTranslations();
		rnCategoryTranslationss.setProperties(rnCategoryTranslationsDTO);
        console.log("rnCategoryTranslationss===>226", rnCategoryTranslationss);
		await this.rnCategoryTranslationsRepository.save(rnCategoryTranslationss);
		return rnCategoryTranslationss;
	}
	async update(rnCategoryTranslationsDTO: RnCategoryTranslationsDTO): Promise<RnCategoryTranslations> {
		const rnCategoryTranslations = new RnCategoryTranslations();
		rnCategoryTranslations.setProperties(rnCategoryTranslationsDTO);
		await this.rnCategoryTranslationsRepository.update({ roleId: rnCategoryTranslations.roleId }, rnCategoryTranslations);
		return rnCategoryTranslations;
	}

	async findAll(): Promise<RnCategoryTranslations[]> {
		return this.rnCategoryTranslationsRepository.find();
	}
	async findOne(roleId: number): Promise<RnCategoryTranslations> {
		return this.rnCategoryTranslationsRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnCategoryTranslationsRepository.delete(id);
	}
}