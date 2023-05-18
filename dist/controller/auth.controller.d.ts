import { AuthService } from 'src/auth/services/auth.service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    getUserAuthentication(username: string, password: string): Promise<any>;
    test(): Promise<string>;
}
