import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: {
        username: any;
        status: any;
        securityquestion: any;
        securityanswer: any;
        role: any;
    }): Promise<{
        username: any;
        status: any;
        securityquestion: any;
        securityanswer: any;
        role: any;
    }>;
}
export {};
