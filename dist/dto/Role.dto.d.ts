import { Role001mb } from "src/entity/Role001mb";
import { BaseDTO } from "./Base.dto";
export declare class RoleDTO extends BaseDTO {
    id: number;
    rolename: string;
    status: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;
    setProperties(role001mb: Role001mb): void;
}
