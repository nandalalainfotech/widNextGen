import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { BaseDTO } from "./Base.dto";
import { RnPages } from "src/entity/rn_pages";

export class RnPagesDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    type: string | null;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    status: number | null;

    setProperties(rnPages: RnPages) {
        this.id = rnPages.id;
        this.type = rnPages.type;
        this.roleId = rnPages.roleId;
        this.status = rnPages.status;
        this.insertUser = rnPages.insertUser;
        this.insertDatetime = rnPages.insertDatetime;
        this.updatedUser = rnPages.updatedUser;
		this.updatedDatetime = rnPages.updatedDatetime;
    }
}