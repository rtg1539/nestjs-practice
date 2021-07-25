import { IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  id: string;

  @IsString()
  pw: string;
}
