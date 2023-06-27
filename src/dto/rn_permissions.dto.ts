import { ApiModelProperty } from "@nestjs/swagger";
import { RnPermissions } from "src/entity/rn_permissions.entity";
import { BaseDTO } from "./Base.dto";

export class RnPermissionsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    controller: string | null;

    @ApiModelProperty({})
    roleId: string;

    @ApiModelProperty({})
    actionView: string;

    @ApiModelProperty({})
    actionCreate: string;

    @ApiModelProperty({})
    actionUpdate: string;

    @ApiModelProperty({})
    actionDelete: string;


    setProperties(rnPermissions: RnPermissions) {
        this.id = rnPermissions.id;
        this.controller = rnPermissions.controller;
        this.actionView = rnPermissions.actionView;
        this.actionCreate = rnPermissions.actionCreate;
        this.actionUpdate = rnPermissions.actionUpdate;
        this.actionDelete = rnPermissions.actionDelete;
        this.roleId = rnPermissions.roleId;
        this.createdBy = rnPermissions.createdBy;
        this.createdAt = rnPermissions.createdAt;
        this.updatedBy = rnPermissions.updatedBy;
        this.updatedAt = rnPermissions.updatedAt;
    }
}