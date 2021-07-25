import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserFeature } from '../users/user.feature';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserFeature],
})
export class AuthModule {}
