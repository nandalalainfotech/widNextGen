// import { Get, Controller, Render } from '@nestjs/common';
// import { AppService } from 'src/service/app.service';


// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   @Render('index')
//   async render() {
//     const message = await this.appService.getHello();
//     return { message };
//   }
// }


// import { Controller, Get } from '@nestjs/common';
// import { I18n, I18nContext } from 'nestjs-i18n';

// @Controller()
// export class AppController {
//   @Get()
//   async getHello(@I18n() i18n: I18nContext) {
//     return await i18n.t('test.HELLO');
//   }
// }