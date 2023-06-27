import { ApiModelProperty } from "@nestjs/swagger";
import { RnCurrencies } from "src/entity/rn_currencies.entity";
import { BaseDTO } from "./Base.dto";
import { RnCurrencyTranslations } from "src/entity/rn_currency_translations.entity";

export class RnCurrencyTranslationsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    currencyId: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    name: string;

    setProperties( rnCurrencyTranslations: RnCurrencyTranslations ) {             
    this.currencyId = rnCurrencyTranslations.currencyId;
    this.locale = rnCurrencyTranslations.locale;
    this.name = rnCurrencyTranslations.name;
    this.createdBy = rnCurrencyTranslations.createdBy;
    this.createdAt = rnCurrencyTranslations.createdAt;
    this.updatedBy = rnCurrencyTranslations.updatedBy;
    this.updatedAt = rnCurrencyTranslations.updatedAt;
    }

}