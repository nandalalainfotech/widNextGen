import { Role001mb } from "src/entity/Role001mb";
import { BaseDTO } from "./Base.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { Users001mb } from "src/entity/Users001mb";

export class RoleDTO extends BaseDTO {
	roleId: number;

	@ApiModelProperty({})
	rolename: string | null;

	@ApiModelProperty({})
	insertUser: string;

	insertDatetime: Date;

	updatedUser: string | null;
	
	updatedDatetime: Date | null;

	users001mbs?: Users001mb[];

	setProperties(role001mb: Role001mb) {
		this.roleId = role001mb.roleId;
		this.rolename = role001mb.rolename;
		this.insertUser = role001mb.insertUser;
		this.insertDatetime = role001mb.insertDatetime;
		this.updatedUser = role001mb.updatedUser;
		this.updatedDatetime = role001mb.updatedDatetime;
	}
}
