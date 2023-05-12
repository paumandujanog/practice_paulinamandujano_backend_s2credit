import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DatabaseConfigType } from 'src/config/types/database.type';
import { UserEntity } from 'src/users/domain/entities/user.entity';
import { DataSource } from 'typeorm';

dotenv.config({ path: './.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.MAIN_DB_PORT,
  port: parseInt(process.env.MAIN_DB_PORT, 10),
  username: process.env.MAIN_DB_USERNAME,
  password: process.env.MAIN_DB_PASSWORD,
  database: process.env.MAIN_DB_NAME,
  synchronize: process.env.MAIN_DB_SYNC === '1',
  migrationsTableName: 'migrations',
  entities: [UserEntity],
  migrations: ['./database/migration/*.ts'],
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    Logger.log('DataSource se ha inicializado');
  })
  .catch((err) => {
    Logger.error('Error mientras se inicializaba Data Source', err);
  });
