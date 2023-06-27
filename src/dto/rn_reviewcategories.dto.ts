import { ApiModelProperty } from "@nestjs/swagger";
import { RnLanguages } from "src/entity/rn_languages.entity";
import { BaseDTO } from "./Base.dto";
import { RnCurrencies } from "src/entity/rn_currencies.entity";

export class RnCategoriesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    image: string;

    @ApiModelProperty({})
    status: number;



    setProperties(rnCategoriesDTO: RnCategoriesDTO) {
        this.id = rnCategoriesDTO.id;
        this.image = rnCategoriesDTO.image;
        this.status = rnCategoriesDTO.status;
        this.createdBy = rnCategoriesDTO.createdBy;
        this.createdAt = rnCategoriesDTO.createdAt;
        this.updatedBy = rnCategoriesDTO.updatedBy;
        this.updatedAt = rnCategoriesDTO.updatedAt;
      }
}