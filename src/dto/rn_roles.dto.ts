
import { RnRoles } from "src/entity/rn_roles.entity";
import { BaseDTO } from "./Base.dto";
import { ApiModelProperty } from "@nestjs/swagger";


export class RnRolesDTO extends BaseDTO {
	id: string;

	@ApiModelProperty({})
	name: string | null;




	setProperties(rnRoles: RnRoles) {
		this.id = rnRoles.id;
		this.name = rnRoles.name;
		this.createdBy = rnRoles.createdBy;
		this.createdAt = rnRoles.createdAt;
		this.updatedBy = rnRoles.updatedBy;
		this.updatedAt = rnRoles.updatedAt;
	}
}
