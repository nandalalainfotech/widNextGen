import { ApiModelProperty } from "@nestjs/swagger";
import { RnPermissions } from "src/entity/rn_permissions";
import { BaseDTO } from "./Base.dto";

export class RnPermissionsDTO extends BaseDTO {
    @ApiModelProperty({})
    prmsnId: number;

    @ApiModelProperty({})
    permissionname: string | null;

    @ApiModelProperty({})
    roleId: number;

    setProperties(rnPermissions: RnPermissions) {
        this.prmsnId = rnPermissions.prmsnId;
        this.permissionname = rnPermissions.permissionname;
        this.roleId = rnPermissions.roleId;
        this.insertUser = rnPermissions.insertUser;
        this.insertDatetime = rnPermissions.insertDatetime;
    }
}