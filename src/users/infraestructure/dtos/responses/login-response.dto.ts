import { ApiProperty } from '@nestjs/swagger';

export class LoginSuccessDto {
  @ApiProperty()
  message: string;
}
