import { Injectable } from '@nestjs/common';
import { UserLoginDto } from '../infraestructure/dtos/requests/user-login.dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSuccessDto } from '../infraestructure/dtos/responses/login-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getOneUser(data: UserLoginDto): Promise<LoginSuccessDto> {
    const { newUserName, newPassword } = data;

    const user = await this.userRepository.findOne({
      where: { userName: newUserName },
    });
    let response: LoginSuccessDto;
    if (user === null) {
      response = { message: 'The user is not valid' };
    } else if (user.userName === newUserName && user.password === newPassword) {
      response = { message: 'The user is valid' };
    } else if (user.userName === newUserName && user.password !== newPassword) {
      response = { message: 'The user is not valid' };
    }
    return response;
  }
}
