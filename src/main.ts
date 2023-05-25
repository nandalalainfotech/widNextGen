import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { ConfigService } from '@nestjs/config';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get<number>('SERVER_HOST');
  const port = configService.get<number>('SERVER_PORT');

  const config = new DocumentBuilder()
    .setTitle('WDINEXTGEN')
    .setDescription('The wdinextgen API description')
    .setVersion('1.0')
    .addTag('WDI')
    .addBearerAuth('Authorization')
    .setHost(host + ':' + port)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();