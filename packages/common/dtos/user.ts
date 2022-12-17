import { IsEmail, IsString } from 'class-validator';

export class SignupResponseDto {
  @IsString()
  nickname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignupRequestDto extends SignupResponseDto {
  @IsString()
  confirmPassword?: string;
}
