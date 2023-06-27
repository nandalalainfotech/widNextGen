import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnCurrenciesDTO } from 'src/dto/rn_currencies.dto';
import { RnCurrencyTranslationsDTO } from 'src/dto/rn_currency_translations.dto';
import { RnCurrencies } from 'src/entity/rn_currencies.entity';
import { RnCurrencyTranslations } from 'src/entity/rn_currency_translations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnCurrenciesService {
	constructor(@InjectRepository(RnCurrencies) private readonly rnCurrenciesRepository: Repository<RnCurrencies>,
	@InjectRepository(RnCurrencyTranslations) private readonly rnCurrencyTranslationsRepository: Repository<RnCurrencyTranslations>) { }

    
	async create(rnCurrenciesDTO: RnCurrenciesDTO ): Promise<any> {
		console.log("rnCurrenciesDTO",rnCurrenciesDTO);
		let rnCurrencyTranslation = new RnCurrencyTranslations();
		let rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO[] = [];
		rnCurrencyTranslation.name	= rnCurrenciesDTO.name;
		rnCurrencyTranslation.locale	= rnCurrenciesDTO.locale;
		rnCurrencyTranslation.currencyId	= rnCurrenciesDTO.currencyId;
		console.log("rnCurrencyTranslation====0",rnCurrencyTranslation);
		rnCurrencyTranslationsDTO	= [rnCurrencyTranslation];
		console.log("rnCurrencyTranslationsDTO====1",rnCurrencyTranslationsDTO);

		let rnCurrencies: RnCurrencies[] = [];
		rnCurrencies = await this.rnCurrenciesRepository.find();
		console.log("rnCurrencies===12", rnCurrencies);
	
		let rnCurrencyTranslations: RnCurrencyTranslations[] = [];
		rnCurrencyTranslations = await this.rnCurrencyTranslationsRepository.find();
		console.log("rnCurrencyTranslations===13", rnCurrencyTranslations);

		console.log("rnCurrencyTranslations===14", rnCurrencies);
		for (let i = 0; i < rnCurrencies.length; i++) {
			if (rnCurrenciesDTO.code.toLowerCase() == rnCurrencies[i].code.toLowerCase()) {
				throw new HttpException('code Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		 	if (rnCurrencyTranslation.name.toLowerCase() == rnCurrencyTranslation[i].name.toLowerCase()) {
		 		throw new HttpException('name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
		 	}
		 }  
	console.log("rnCurrenciesDTO===15", rnCurrenciesDTO);
		// const rnCurrencyTranslationss:  RnCurrencyTranslations[] = [];
		// rnCurrencyTranslationss.setProperties(rnCurrencyTranslationsDTO);
		const rnCurrenciess = new RnCurrencies();
		rnCurrenciess.setProperties(rnCurrenciesDTO);
		rnCurrenciess.createdBy = rnCurrenciesDTO.createdBy;
		rnCurrenciess.createdAt = rnCurrenciesDTO.createdAt;
		// await this.rnCurrenciesRepository.save(rnCurrencyTranslations);
		await this.rnCurrenciesRepository.save(rnCurrenciess);
		return rnCurrenciess;
	}
	async update(rnCurrenciesDTO: RnCurrenciesDTO): Promise<RnCurrencies> {
		const rnCurrencies = new RnCurrencies();
		rnCurrencies.setProperties(rnCurrenciesDTO);
		await this.rnCurrenciesRepository.update({ id: rnCurrencies.id }, rnCurrencies);
		return rnCurrencies;
	}

	async findAll(): Promise<RnCurrencies[]> {
		return this.rnCurrenciesRepository.find();
	}
	async findOne(roleId: number): Promise<RnCurrencies> {
		return this.rnCurrenciesRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnCurrenciesRepository.delete(id);
	}
}