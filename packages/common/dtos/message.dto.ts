import { Type } from 'class-transformer';
import { IsDefined, IsNotEmptyObject, IsObject, IsString } from 'class-validator';

import { UserResponseDto } from './user.dto';

export class MessageResponseDto {
  @IsString()
  content: string;

  @IsString()
  password: string;

  @IsString()
  timestamp: string;

  @IsString()
  image: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => UserResponseDto)
  user: UserResponseDto;
}
