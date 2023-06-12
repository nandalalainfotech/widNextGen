import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from 'src/controller/group.controller';
import { Group001mb } from 'src/entity/Group001mb';
import { Users001mb } from 'src/entity/Users001mb';
import { GroupService } from 'src/service/group.service';
import { UsersService } from 'src/service/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group001mb, Users001mb])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}