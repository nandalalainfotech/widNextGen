import { ApiModelProperty } from "@nestjs/swagger";
import { RnCurrencies } from "src/entity/rn_currencies.entity";
import { BaseDTO } from "./Base.dto";
import { RnCurrencyTranslations } from "src/entity/rn_currency_translations.entity";

export class RnCurrenciesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    code: string;

    @ApiModelProperty({})
    symbol: string;

    @ApiModelProperty({})
    default: number;

    // @ApiModelProperty({})
    // id: string;

    @ApiModelProperty({})
    currencyId: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    name: string;


    setProperties(rnCurrencies: RnCurrencies, rnCurrencyTranslations: RnCurrencyTranslations) {
        this.id = rnCurrencies.id;
        this.code = rnCurrencies.code;
        this.symbol = rnCurrencies.symbol;
        this.default = rnCurrencies.default;
        this.createdBy = rnCurrencies.createdBy;
        this.createdAt = rnCurrencies.createdAt;
        this.updatedBy = rnCurrencies.updatedBy;
        this.updatedAt = rnCurrencies.updatedAt;

        this.currencyId = rnCurrencyTranslations.currencyId;
        this.locale = rnCurrencyTranslations.locale;
        this.name = rnCurrencyTranslations.name;
        this.createdBy = rnCurrencyTranslations.createdBy;
        this.createdAt = rnCurrencyTranslations.createdAt;
        this.updatedBy = rnCurrencyTranslations.updatedBy;
        this.updatedAt = rnCurrencyTranslations.updatedAt;
    }
}