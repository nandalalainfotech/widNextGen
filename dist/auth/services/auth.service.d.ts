import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User001mb } from 'src/entity/User001mb';
import { UserDTO } from 'src/dto/User.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User001mb>, jwtService: JwtService);
    generateJwt(username: any, status: any, securityquestion: any, securityanswer: any, role: any): Observable<string>;
    getUserAuthentication(username: string, password: string): Promise<Observable<{
        userDTO: UserDTO;
        access_token: string;
    }>>;
}
