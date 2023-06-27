import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { BaseDTO } from "./Base.dto";
import { RnPages } from "src/entity/rn_pages.entity";

export class RnPagesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    type: string | null;

    @ApiModelProperty({})
    status: number | null;

    setProperties(rnPages: RnPages) {
        this.id = rnPages.id;
        this.type = rnPages.type;
        this.status = rnPages.status;
        this.createdBy = rnPages.createdBy;
        this.createdAt = rnPages.createdAt;
        this.updatedBy = rnPages.updatedBy;
        this.updatedAt = rnPages.updatedAt;
    }
}