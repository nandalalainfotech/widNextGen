import { ApiModelProperty } from "@nestjs/swagger";
import { RnLanguages } from "src/entity/rn_languages.entity";
import { BaseDTO } from "./Base.dto";

export class RnLanguagesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    name: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    isoCode: string;

    @ApiModelProperty({})
    direction: string | null;

    @ApiModelProperty({})
    image: string;

    @ApiModelProperty({})
    ordering: number;

    @ApiModelProperty({})
    default: number;

    @ApiModelProperty({})
    status: number;

    setProperties(rnLanguages: RnLanguages) {
        this.id = rnLanguages.id;
        this.name = rnLanguages.name;
        this.locale = rnLanguages.locale;
        this.isoCode = rnLanguages.isoCode;
        this.direction = rnLanguages.direction;
        this.image = rnLanguages.image;
        this.ordering = rnLanguages.ordering;
        this.default = rnLanguages.default;
        this.status = rnLanguages.status;
        this.createdBy = rnLanguages.createdBy;
        this.createdAt = rnLanguages.createdAt;
        this.updatedBy = rnLanguages.updatedBy;
        this.updatedAt = rnLanguages.updatedAt;
      }
}