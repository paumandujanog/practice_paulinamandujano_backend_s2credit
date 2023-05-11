import { Controller } from '@nestjs/common';

import { UserLoginDto } from '../dtos/requests/user-login.dto';
import { UserService } from 'src/users/application/user.service';
import { LoginSuccessDto } from '../dtos/responses/login-response.dto';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  public async loginHandler(@Body() data: UserLoginDto) {
    console.log(data);
    const response = await this.userService.getOneUser(data);
    return true;
  }
}
