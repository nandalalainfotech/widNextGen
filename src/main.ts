import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('WDINEXTGEN')
    .setDescription('The wdinextgen API description')
    .setVersion('1.0')
    .addTag('WDI')
    .addBearerAuth('Authorization') 
    .setHost('localhost:3000')
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
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  
}
bootstrap();