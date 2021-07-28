import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthPayload } from './auth.interface';

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
      return { accessToken: this.jwtService.sign({ userId, userName }) };
    }
    return false;
  }

  async verify(payload: AuthPayload) {
    const { userId: id } = payload;
    const user = await this.usersService.findOne(id);

    if (!user) return false;

    const { id: userId, name: userName } = user;
    const accessToken = this.generateToken({
      userId,
      userName,
    });

    return accessToken;
  }

  generateToken(payload: AuthPayload, ttl?: number) {
    const options: JwtSignOptions = { expiresIn: ttl ? ttl.toString() : '1h' };
    return this.jwtService.sign(payload, options);
  }
}
