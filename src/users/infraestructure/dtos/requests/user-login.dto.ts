import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newUserName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
