import { RoleDTO } from "src/dto/Role.dto";
import { User001mb } from "./User001mb";
export declare class Role001mb {
    id: number;
    rolename: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;
    user001mbs: User001mb[];
    setProperties(roleDTO: RoleDTO): void;
}
