import { ApiModelProperty } from "@nestjs/swagger";
import { RnLanguages } from "src/entity/rn_languages.entity";
import { BaseDTO } from "./Base.dto";
import { RnCurrencies } from "src/entity/rn_currencies.entity";

export class RnCategoriesDTO extends BaseDTO {
    @ApiModelProperty({})
    categoryId: number;

    @ApiModelProperty({})
    image: string;

    @ApiModelProperty({})
    status: number;

    @ApiModelProperty({})
    roleId: number;



    setProperties(rnCategoriesDTO: RnCategoriesDTO) {
        this.categoryId = rnCategoriesDTO.categoryId;
        this.image = rnCategoriesDTO.image;
        this.status = rnCategoriesDTO.status;
        this.roleId = rnCategoriesDTO.roleId;
        this.insertUser = rnCategoriesDTO.insertUser;
        this.insertDatetime = rnCategoriesDTO.insertDatetime;
        this.updatedUser = rnCategoriesDTO.updatedUser;
        this.updatedDatetime = rnCategoriesDTO.updatedDatetime;
      }
}