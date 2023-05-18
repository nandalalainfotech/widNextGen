import { UserDTO } from 'src/dto/User.dto';
import { User001mb } from 'src/entity/User001mb';
import { UserService } from 'src/service/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create1(userDTO: UserDTO): Promise<User001mb>;
    findAll1(): Promise<User001mb[]>;
    create(userDTO: UserDTO): Promise<User001mb>;
    update(userDTO: UserDTO): Promise<User001mb>;
    updateRole(roleid: any): Promise<User001mb>;
    updateUserTheme(updateTheme: any): Promise<User001mb>;
    updateUserName(userName: any): Promise<User001mb>;
    updatePassword(userDTO: UserDTO): Promise<User001mb>;
    findAll(): Promise<User001mb[]>;
    findOne(personId: number): Promise<User001mb>;
    remove(id: number): Promise<void>;
}
