import { ApiModelProperty } from "@nestjs/swagger";
import { Permission001mb } from "src/entity/Permission001mb";
import { BaseDTO } from "./Base.dto";

export class PermissionDTO extends BaseDTO {
    @ApiModelProperty({})
    prmsnId: number;

    @ApiModelProperty({})
    name: string | null;

    @ApiModelProperty({})
    roleId: number;

    setProperties(permission001mb: Permission001mb) {
        this.prmsnId = permission001mb.prmsnId;
        this.name = permission001mb.name;
        this.roleId = permission001mb.roleId;
        this.insertUser = permission001mb.insertUser;
        this.insertDatetime = permission001mb.insertDatetime;
    }
}