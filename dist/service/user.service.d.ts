import { UserDTO } from 'src/dto/User.dto';
import { User001mb } from 'src/entity/User001mb';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
export declare class UserService {
    private mailService;
    private readonly userRepository;
    saltRounds: number;
    constructor(mailService: MailService, userRepository: Repository<User001mb>);
    create(userDTO: UserDTO): Promise<User001mb>;
    updateRole(userDTO: UserDTO): Promise<User001mb>;
    update(userDTO: UserDTO): Promise<User001mb>;
    updatePassword(userDTO: UserDTO): Promise<User001mb>;
    updateUserName(user: any): Promise<User001mb>;
    update1(updateTheme: any): Promise<User001mb>;
    findAll(): Promise<User001mb[]>;
    findOne(personId: number): Promise<User001mb>;
    remove(id: number): Promise<void>;
}
