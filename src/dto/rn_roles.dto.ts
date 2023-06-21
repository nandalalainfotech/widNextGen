
import { RnRoles } from "src/entity/rn_roles";
import { BaseDTO } from "./Base.dto";
import { ApiModelProperty } from "@nestjs/swagger";


export class RnRolesDTO extends BaseDTO {
	roleId: number;

	@ApiModelProperty({})
	rolename: string | null;

	@ApiModelProperty({})
	insertUser: string;
	
	@ApiModelProperty({})
	insertDatetime: Date;

	updatedUser: string | null;
	
	updatedDatetime: Date | null;


	setProperties(rnRoles: RnRoles) {
		this.roleId = rnRoles.roleId;
		this.rolename = rnRoles.rolename;
		this.insertUser = rnRoles.insertUser;
		this.insertDatetime = rnRoles.insertDatetime;
		this.updatedUser = rnRoles.updatedUser;
		this.updatedDatetime = rnRoles.updatedDatetime;
	}
}
