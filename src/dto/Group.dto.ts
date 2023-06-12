import { ApiModelProperty } from "@nestjs/swagger";
import { Group001mb } from "src/entity/Group001mb";
import { BaseDTO } from "./Base.dto";

export class GroupDTO extends BaseDTO {
    groupId: number;

    @ApiModelProperty({})
    groupname: string | null;

    @ApiModelProperty({})
    roleId: number | null;


    setProperties(group001mb: Group001mb) {
        this.groupId = group001mb.groupId;
        this.groupname = group001mb.groupname;
        this.roleId = group001mb.roleId;
        this.insertUser = group001mb.insertUser;
        this.insertDatetime = group001mb.insertDatetime;
    }
}