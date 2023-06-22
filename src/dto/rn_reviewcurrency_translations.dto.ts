import { ApiModelProperty } from "@nestjs/swagger";
import { RnCurrencyTranslations } from "src/entity/rn_currency_translations.entity";
import { BaseDTO } from "./Base.dto";

export class RnCurrencyTranslationsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    currencyId: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    name: string;

    setProperties(rnCurrencyTranslations: RnCurrencyTranslations) {
        this.id = rnCurrencyTranslations.id;
        this.currencyId = rnCurrencyTranslations.currencyId;
        this.locale = rnCurrencyTranslations.locale;
        this.name = rnCurrencyTranslations.name;
        this.roleId = rnCurrencyTranslations.roleId;
        this.insertUser = rnCurrencyTranslations.insertUser;
        this.insertDatetime = rnCurrencyTranslations.insertDatetime;
        this.updatedUser = rnCurrencyTranslations.updatedUser;
        this.updatedDatetime = rnCurrencyTranslations.updatedDatetime;
      }
}