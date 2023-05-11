import { IsNotEmpty, IsString } from 'class-validator';

export class LoginSuccessDto {
  @IsString()
  @IsNotEmpty()
  user: string;
}
