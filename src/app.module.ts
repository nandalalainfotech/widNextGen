import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { RnLanguagesModule } from './module/rn_languages.module';
import { RnPermissionsModule } from './module/rn_permissions.module';
import { RnRolesModule } from './module/rn_roles.module';
import { RnUsersModule } from './module/rn_users.module';

import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
const path = require('path');





@Module({

    imports: [
        // I18nModule.forRoot({
        //     fallbackLanguage: 'en',
        //     loaderOptions: {
        //         path: path.join(__dirname, '/rn_i18n/'),
        //         watch: true,
        //     },
        // }),
        //   resolvers: [
        //     { use: QueryResolver, options: ['lang'] },
        //     AcceptLanguageResolver,
        //   ],

        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
            envFilePath: ['.env.configuration.dev'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
            ({
                type: 'mysql',
                synchronize: false,
                host: configService.get<string>('DATABASE_HOST'),
                port: Number(configService.get<string>('DATABASE_PORT')),
                username: configService.get<string>('DATABASE_USER_NAME'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                autoLoadEntities: true,
                entities: ['../dist/entity/*.entity.{ts,js}'],
                subscribers: ['../dist/entity/*.entity.{ts,js}'],
                migrations: ['../dist/entity/*.entity.{ts,js}'],
                namingStrategy: new SnakeNamingStrategy(),
            } as TypeOrmModuleOptions),

        }),
        AuthModule,
        MailModule,
        RnRolesModule,
        RnPermissionsModule,
        RnUsersModule,
        RnLanguagesModule,


    ],

})

export class AppModule { }