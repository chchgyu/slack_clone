import { IsString } from 'class-validator';

export class CreateChannelRequestDto {
  @IsString()
  name: string;

  @IsString()
  details: string;
}
