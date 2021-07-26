import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserFeature } from './user.feature';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UserFeature],
  exports: [UsersService],
})
export class UsersModule {}
