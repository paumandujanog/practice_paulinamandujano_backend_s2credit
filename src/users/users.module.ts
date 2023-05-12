import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { UserEntity } from './domain/entities/user.entity';
import { UserController } from './infraestructure/controllers/user.controller';
import { UserService } from './application/user.service';
import { CoreModule } from 'src/core/core.module';

const relative: string = path.join(path.relative('.', __dirname), '..');
dotenv.config({ path: `${relative}/.env` });

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), CoreModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
