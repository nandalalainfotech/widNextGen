"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const role_module_1 = require("./module/role.module");
const user_module_1 = require("./module/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
                envFilePath: ['.env.configuration.dev'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    synchronize: false,
                    host: configService.get('DATABASE_HOST'),
                    port: Number(configService.get('DATABASE_PORT')),
                    username: configService.get('DATABASE_USER_NAME'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    autoLoadEntities: true,
                    entities: ['../dist/entity/*.entity.{ts,js}'],
                    subscribers: ['../dist/entity/*.entity.{ts,js}'],
                    migrations: ['../dist/entity/*.entity.{ts,js}'],
                    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                }),
            }),
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map