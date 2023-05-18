import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from 'src/controller/Role.controller';
import { Role001mb } from 'src/entity/Role001mb';
import { User001mb } from 'src/entity/User001mb';
import { RoleService } from 'src/service/Role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role001mb,User001mb])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
