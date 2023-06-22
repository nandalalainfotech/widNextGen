import { ApiModelProperty } from "@nestjs/swagger";
import { RnLanguages } from "src/entity/rn_languages.entity";
import { BaseDTO } from "./Base.dto";

export class RnLanguagesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    name: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    isoCode: string;

    @ApiModelProperty({})
    direction: string | null;

    @ApiModelProperty({})
    photo: string;

    @ApiModelProperty({})
    ordering: number;

    @ApiModelProperty({})
    default: number;

    @ApiModelProperty({})
    status: string;

    setProperties(rnLanguages: RnLanguages) {
        this.id = rnLanguages.id;
        this.name = rnLanguages.name;
        this.locale = rnLanguages.locale;
        this.isoCode = rnLanguages.isoCode;
        this.roleId = rnLanguages.roleId;
        this.direction = rnLanguages.direction;
        this.photo = rnLanguages.photo;
        this.ordering = rnLanguages.ordering;
        this.default = rnLanguages.default;
        this.status = rnLanguages.status;
        this.insertUser = rnLanguages.insertUser;
        this.insertDatetime = rnLanguages.insertDatetime;
        this.updatedUser = rnLanguages.updatedUser;
        this.updatedDatetime = rnLanguages.updatedDatetime;
      }
}