import { ApiModelProperty } from "@nestjs/swagger";
import { RnCategoryTranslations } from "src/entity/rn_reviewcategory_translations.entity";
import { BaseDTO } from "./Base.dto";

export class RnCategoryTranslationsDTO extends BaseDTO {
    id: number;

    @ApiModelProperty({})
    categoryId: number;

    @ApiModelProperty({})
   name: string;

    @ApiModelProperty({})
    image: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    roleId: number;



  
    setProperties(rnCategoryTranslations: RnCategoryTranslations) {
        this.id = rnCategoryTranslations.id;
        this.roleId = rnCategoryTranslations.roleId;
        this.categoryId = rnCategoryTranslations.categoryId;
        this.locale = rnCategoryTranslations.locale;
        this.name = rnCategoryTranslations.name;
        this.insertUser = rnCategoryTranslations.insertUser;
        this.insertDatetime = rnCategoryTranslations.insertDatetime;
        this.updatedUser = rnCategoryTranslations.updatedUser;
        this.updatedDatetime = rnCategoryTranslations.updatedDatetime;
      }
}