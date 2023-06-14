import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Users001mb } from 'src/entity/Users001mb';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private config: ConfigService) { }

  async sendUserConfirmation(users001mb: Users001mb) {
    const temppassword = "wdinext001";
    await this.mailerService.sendMail({
      to: users001mb.email,
      from: 'dhayalaguru.g@gmail.com', // override default from
      subject: 'Welcome to WDI! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        name: users001mb.username,
        temp_pass_word: temppassword,
      },
    });
  }
}
