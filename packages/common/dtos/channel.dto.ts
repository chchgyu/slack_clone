import { IsString } from 'class-validator';

export class CreateChannelRequestDto {
  @IsString()
  name: string;

  @IsString()
  details: string;
}

export class ChannelResponenseDto extends CreateChannelRequestDto {
  @IsString()
  id: string;
}
