import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RnCategoriesDTO } from 'src/dto/rn_reviewcategories.dto';
import { RnCategories } from 'src/entity/rn_reviewcategories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RnCategoriesService {
	constructor(@InjectRepository(RnCategories) private readonly rnCategoriesRepository: Repository<RnCategories>) { }

    
	async create(rnCategoriesDTO: RnCategoriesDTO): Promise<RnCategories> {
		let rnCategories: RnCategories[] = [];
		rnCategories = await this.rnCategoriesRepository.find({ relations: ["role"] });
		// for (let i = 0; i < rnCategories.length; i++) {
		// 	if (rnCategoriesDTO.status.toLowerCase() == rnCategories[i].status.toLowerCase()) {
		// 		throw new HttpException('status Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
		// 	}
		// }
		console.log("rnPagesDTO===============>13", rnCategoriesDTO);

		const rnCategoriess = new RnCategories();
		rnCategoriess.setProperties(rnCategoriesDTO);
		rnCategoriess.createdBy = rnCategoriesDTO.createdBy;
		rnCategoriess.createdAt = rnCategoriesDTO.createdAt;
		await this.rnCategoriesRepository.save(rnCategoriess);
		return rnCategoriess;
	}
	async update(rnCategoriesDTO: RnCategoriesDTO): Promise<RnCategories> {
		const rnCategories = new RnCategories();
		rnCategories.setProperties(rnCategoriesDTO);
		await this.rnCategoriesRepository.update({ id: rnCategories.id }, rnCategories);
		return rnCategories;
	}

	async findAll(): Promise<RnCategories[]> {
		return this.rnCategoriesRepository.find();
	}
	async findOne(roleId: number): Promise<RnCategories> {
		return this.rnCategoriesRepository.findOne(roleId);
	}

	async remove(id: number): Promise<void> {
		await this.rnCategoriesRepository.delete(id);
	}
}