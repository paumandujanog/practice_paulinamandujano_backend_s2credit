import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { UserEntity } from './domain/entities/user.entity';
import { UserRepository } from './domain/repositories/user.repository';
import { UserController } from './infraestructure/controllers/user.controller';
import { UserService } from './application/user.service';

const relative: string = path.join(path.relative('.', __dirname), '..');
dotenv.config({ path: `${relative}/.env` });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Pau971011',
      database: 'rick-and-morty',
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
