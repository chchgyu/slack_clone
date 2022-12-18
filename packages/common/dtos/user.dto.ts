import { IsEmail, IsString } from 'class-validator';

export class SignupResponseDto {
  @IsString()
  nickname: string;

  @IsEmail()
  email: string;
}

export class SignupRequestDto extends SignupResponseDto {
  @IsString()
  password: string;

  @IsString()
  confirmPassword?: string;
}
