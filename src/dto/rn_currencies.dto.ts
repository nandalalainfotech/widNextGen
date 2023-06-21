import { ApiModelProperty } from "@nestjs/swagger";
import { RnLanguages } from "src/entity/rn_languages";
import { BaseDTO } from "./Base.dto";
import { RnCurrencies } from "src/entity/rn_currencies";

export class RnCurrenciesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    code: string;

    @ApiModelProperty({})
    symbol: string;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    regionCode: string;

    @ApiModelProperty({})
    photo: string;

    @ApiModelProperty({})
    default: number;
  

    setProperties(rnCurrencies: RnCurrencies) {
        this.id = rnCurrencies.id;
        this.code = rnCurrencies.code;
        this.symbol = rnCurrencies.symbol;
        this.regionCode = rnCurrencies.regionCode;
        this.roleId = rnCurrencies.roleId;
        this.photo = rnCurrencies.photo;
        this.photo = rnCurrencies.photo;
        this.default = rnCurrencies.default;
        this.insertUser = rnCurrencies.insertUser;
        this.insertDatetime = rnCurrencies.insertDatetime;
        this.updatedUser = rnCurrencies.updatedUser;
        this.updatedDatetime = rnCurrencies.updatedDatetime;
      }
}