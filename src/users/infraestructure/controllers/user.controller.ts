import { Controller } from '@nestjs/common';

import { UserLoginDto } from '../dtos/requests/user-login.dto';
import { UserService } from 'src/users/application/user.service';
import { LoginSuccessDto } from '../dtos/responses/login-response.dto';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @ApiOkResponse({ type: LoginSuccessDto })
  public async loginHandler(
    @Body() data: UserLoginDto,
  ): Promise<LoginSuccessDto> {
    return await this.userService.getOneUser(data);
  }
}
