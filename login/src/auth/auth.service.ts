import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { id, pw } = loginAuthDto;
    const user = await this.usersService.findOne(id);
    const { pw: userPw } = user;
    console.log('a');
    console.log(user && pw === userPw);
    return user;
  }
}
