import { Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserLoginDto } from '../infraestructure/dtos/requests/user-login.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getOneUser(data: UserLoginDto) {
    const { newUserName, newPassword } = data;
    const user = await this.userRepository.getOneUser(newUserName);
    if (user.userName === newUserName && user.password === newPassword) {
      return { message: 'The user is valid' };
    }
  }
}
