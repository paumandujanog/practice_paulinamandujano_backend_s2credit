import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  public async getOneUser(userName: string): Promise<UserEntity> {
    console.log('..estoy en repository,', userName);
    const query = this.createQueryBuilder('user');
    query.where('user.user_name =:userName', { userName });
    return query.getOneOrFail();
  }
}
