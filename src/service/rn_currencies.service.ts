import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnCurrenciesDTO } from 'src/dto/rn_currencies.dto';
import { RnPagesDTO } from 'src/dto/rn_pages.dto';
import { RnCurrencies } from 'src/entity/rn_currencies';
import { Repository } from 'typeorm';

@Injectable()
export class RnCurrenciesService {
	constructor(@InjectRepository(RnCurrencies) private readonly rnCurrenciesRepository: Repository<RnCurrencies>) { }

    
	async create(rnCurrenciesDTO: RnCurrenciesDTO): Promise<RnCurrencies> {
		let rnCurrencies: RnCurrencies[] = [];
		rnCurrencies = await this.rnCurrenciesRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnCurrencies.length; i++) {
			if (rnCurrenciesDTO.code.toLowerCase() == rnCurrencies[i].code.toLowerCase()) {
				throw new HttpException('code Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnPagesDTO===============>13", rnCurrenciesDTO);

		const rnCurrenciess = new RnCurrencies();
		rnCurrenciess.setProperties(rnCurrenciesDTO);
		await this.rnCurrenciesRepository.save(rnCurrenciess);
		return rnCurrenciess;
	}
	async update(rnCurrenciesDTO: RnCurrenciesDTO): Promise<RnCurrencies> {
		const rnCurrencies = new RnCurrencies();
		rnCurrencies.setProperties(rnCurrenciesDTO);
		await this.rnCurrenciesRepository.update({ roleId: rnCurrencies.roleId }, rnCurrencies);
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