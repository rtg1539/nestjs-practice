import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'id',
      passwordField: 'pw',
    });
  }

  async validate(id: string, pw: string): Promise<any> {
    return { id, pw };
    // const user = await this.authService.validateUser({ id, pw });
    // console.log(user);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
