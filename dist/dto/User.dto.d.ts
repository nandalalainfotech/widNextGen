import { Role001mb } from "src/entity/Role001mb";
import { User001mb } from "src/entity/User001mb";
export declare class UserDTO {
    personId: number;
    unitslno: number;
    dpslno: number;
    firstname: string;
    lastname: string;
    username: string;
    roleid: number;
    password: string;
    status: string;
    email: string;
    securityquestion: string;
    securityanswer: string;
    theme: string | null;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;
    role: Role001mb;
    setProperties(user001mb: User001mb): void;
}
