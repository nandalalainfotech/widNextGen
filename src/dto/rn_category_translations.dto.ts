import { ApiModelProperty } from "@nestjs/swagger";
import { RnCategoryTranslations } from "src/entity/rn_reviewcategory_translations.entity";
import { BaseDTO } from "./Base.dto";
import { RnCurrencyTranslations } from "src/entity/rn_currency_translations.entity";

export class RnCategoryTranslationsDTO extends BaseDTO {
  id: string;

  @ApiModelProperty({})
  categoryId: number;

  @ApiModelProperty({})
  locale: string;

  @ApiModelProperty({})
  name: string;

  @ApiModelProperty({})
  currencyId: string;

  setProperties(rnCategoryTranslations: RnCategoryTranslations) {
    this.id = rnCategoryTranslations.id;
    this.categoryId = rnCategoryTranslations.categoryId;
    this.locale = rnCategoryTranslations.locale;
    this.name = rnCategoryTranslations.name;
    this.createdBy = rnCategoryTranslations.createdBy;
    this.createdAt = rnCategoryTranslations.createdAt;
    this.updatedBy = rnCategoryTranslations.updatedBy;
    this.updatedAt = rnCategoryTranslations.updatedAt;

  }
}