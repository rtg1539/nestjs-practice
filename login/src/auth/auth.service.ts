import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { id, pw } = loginAuthDto;
    const user = await this.usersService.findOne(id);

    const { pw: userPw, name: userName, id: userId } = user;
    if (user && pw === userPw) {
      console.log(user);
      return { accessToken: this.jwtService.sign({ userId, userName }) };
    }
    return false;
  }

  async verify() {
    console.log('a');
  }
}
