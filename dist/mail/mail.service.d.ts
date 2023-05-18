import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { User001mb } from 'src/entity/User001mb';
export declare class MailService {
    private mailerService;
    private config;
    constructor(mailerService: MailerService, config: ConfigService);
    sendUserConfirmation(user001mb: User001mb): Promise<void>;
}
