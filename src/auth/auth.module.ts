import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controller/auth.controller';
import { RnRoles } from 'src/entity/rn_roles.entity';
import { RnUsers } from 'src/entity/rn_users.entity';
import { RolesGuard } from 'src/roles/role.guard';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([RnRoles, RnUsers]),
        JwtModule.registerAsync({
            imports: [ConfigModule], // Missing this
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '10000s' }
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy,RolesGuard, RolesGuard],
    controllers: [AuthController],
    exports: [AuthService,RolesGuard, RolesGuard]
})

export class AuthModule { }