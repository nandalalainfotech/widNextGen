import { ApiModelProperty } from "@nestjs/swagger";
import { RnPermissions } from "src/entity/rn_permissions";
import { BaseDTO } from "./Base.dto";

export class RnPermissionsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    controller: string | null;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    get: string;

    @ApiModelProperty({})
    put: string;

    setProperties(rnPermissions: RnPermissions) {
        this.id = rnPermissions.id;
        this.controller = rnPermissions.controller;
        this.get = rnPermissions.get;
        this.put = rnPermissions.put;
        this.roleId = rnPermissions.roleId;
        this.insertUser = rnPermissions.insertUser;
        this.insertDatetime = rnPermissions.insertDatetime;
    }
}