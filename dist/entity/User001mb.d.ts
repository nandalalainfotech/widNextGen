import { Role001mb } from "./Role001mb";
import { UserDTO } from "src/dto/User.dto";
export declare class User001mb {
    personId: number;
    roleid: number;
    firstname: string;
    lastname: string;
    username: string;
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
    setProperties(userDTO: UserDTO): void;
}
