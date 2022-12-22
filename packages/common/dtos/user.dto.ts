import { IsEmail, IsString } from 'class-validator';

export class SignupRequestDto {
  @IsString()
  nickname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  confirmPassword?: string;
}

export class LoginRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UserResponseDto {
  @IsString()
  avatar: string;

  @IsString()
  id: string;

  @IsString()
  name: string;
}
