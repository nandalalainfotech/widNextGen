import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controller/auth.controller';
import { Role001mb } from 'src/entity/Role001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';
import { Role001mbsGuard } from 'src/role001mbs/role001mbs.guard';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users001mb, Role001mb]),
        JwtModule.registerAsync({
            imports: [ConfigModule], // Missing this
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '5000s' }
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy,Role001mbsGuard, Role001mbsGuard],
    controllers: [AuthController],
    exports: [AuthService,Role001mbsGuard, Role001mbsGuard]
})

export class AuthModule { }