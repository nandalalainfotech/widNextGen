import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('WDINEXTGEN')
    .setDescription('The wdinextgen API description')
    .setVersion('1.0')
    .addTag('WDI')
    .addBearerAuth('Authorization', 'header', 'basic')
    .setHost('localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  // await app.listen(3000, "0.0.0.0");
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
