import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnLanguagesDTO } from 'src/dto/rn_languages.dto';
import { RnLanguages } from 'src/entity/rn_languages.entity';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';


@Injectable()
export class RnLanguagesService {

	saltRounds = 10;
	

	constructor(private mailService: MailService,
		@InjectRepository(RnLanguages) private readonly rnLanguagesRepository: Repository<RnLanguages>) { }


	async create(rnLanguagesDTO: RnLanguagesDTO): Promise<RnLanguages> {
		let rnLanguage: RnLanguages[] = [];
		rnLanguage = await this.rnLanguagesRepository.find({ relations: ["role"] });
		for (let i = 0; i < rnLanguage.length; i++) {
			if (rnLanguagesDTO.name.toLowerCase() == rnLanguage[i].name.toLowerCase()) {
				throw new HttpException('name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
			if (rnLanguagesDTO.locale.toLowerCase() == rnLanguage[i].locale.toLowerCase()) {
				throw new HttpException('locale Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
			if (rnLanguagesDTO.isoCode.toLowerCase() == rnLanguage[i].isoCode.toLowerCase()) {
				throw new HttpException('isoCode Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		console.log("rnLanguagesDTO===============>13", rnLanguagesDTO);

		const rnLanguages = new RnLanguages();
		rnLanguages.setProperties(rnLanguagesDTO);
		await this.rnLanguagesRepository.save(rnLanguages);
		return rnLanguages;
	}




	async update(rnLanguagesDTO: RnLanguagesDTO): Promise<RnLanguages> {
		const rnLanguages = new RnLanguages();
		rnLanguages.name = rnLanguagesDTO.name;
		rnLanguages.locale = rnLanguagesDTO.locale;
		rnLanguages.isoCode = rnLanguagesDTO.isoCode;
		rnLanguages.updatedUser = rnLanguagesDTO.updatedUser;
		rnLanguages.updatedDatetime = rnLanguagesDTO.updatedDatetime;
		rnLanguages.updatedUser = rnLanguagesDTO.updatedUser;
		rnLanguages.updatedDatetime = rnLanguagesDTO.updatedDatetime;

		await this.rnLanguagesRepository.update({ id: rnLanguagesDTO.id }, rnLanguages);
		return rnLanguages;

	}


	async findAll(): Promise<RnLanguages[]> {
		console.log("RnLanguages==11", RnLanguages);
		return this.rnLanguagesRepository.find({ relations: ["role"] });
	}

	async findOne(Id: number): Promise<RnLanguages> {
		return this.rnLanguagesRepository.findOne(Id);
	}

	async remove(id: number): Promise<void> {
		await this.rnLanguagesRepository.delete(id);

	}

}

