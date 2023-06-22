import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnCurrencyTranslationsDTO } from 'src/dto/rn_reviewcurrency_translations.dto';
import { RnCurrencyTranslations } from 'src/entity/rn_currency_translations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnCurrencyTranslationsService {
	constructor(@InjectRepository(RnCurrencyTranslations) private readonly rnCurrencyTranslationsRepository: Repository<RnCurrencyTranslations>) { }

    
	async create(rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO): Promise<RnCurrencyTranslations> {
		let rnCurrencyTranslations: RnCurrencyTranslations[] = [];
		rnCurrencyTranslations = await this.rnCurrencyTranslationsRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnCurrencyTranslations.length; i++) {
			if (rnCurrencyTranslationsDTO.currencyId.toLowerCase() == rnCurrencyTranslations[i].currencyId.toLowerCase()) {
				throw new HttpException('currencyId Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnPagesDTO===============>13", rnCurrencyTranslationsDTO);

		const rnCurrencytranslations = new RnCurrencyTranslations();
		rnCurrencytranslations.setProperties(rnCurrencyTranslationsDTO);
		await this.rnCurrencyTranslationsRepository.save(rnCurrencytranslations);
		return rnCurrencytranslations;
	}
	async update(rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO): Promise<RnCurrencyTranslations> {
		const rnCurrencyTranslations = new RnCurrencyTranslations();
		rnCurrencyTranslations.setProperties(rnCurrencyTranslationsDTO);
		await this.rnCurrencyTranslationsRepository.update({ roleId: rnCurrencyTranslations.roleId }, rnCurrencyTranslations);
		return rnCurrencyTranslations;
	}

	async findAll(): Promise<RnCurrencyTranslations[]> {
		return this.rnCurrencyTranslationsRepository.find();
	}
	async findOne(roleId: number): Promise<RnCurrencyTranslations> {
		return this.rnCurrencyTranslationsRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnCurrencyTranslationsRepository.delete(id);
	}
}