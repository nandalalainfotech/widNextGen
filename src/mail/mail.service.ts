import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RnUsers } from 'src/entity/rn_users';



@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private config: ConfigService) { }

  async sendUserConfirmation(rnUsers: RnUsers) {
    const temppassword = "wdinext001";
    await this.mailerService.sendMail({
      to: rnUsers.email,
      from: 'dhayalaguru.g@gmail.com', // override default from
      subject: 'Welcome to WDI! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        name: rnUsers.username,
        temp_pass_word: temppassword,
      },
    });
  }
}
