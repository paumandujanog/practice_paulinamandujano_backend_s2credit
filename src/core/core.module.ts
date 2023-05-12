import * as path from 'path';
import { HttpModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { ConfigModule } from '../config/config.module';
import { databaseConfigLoader } from 'src/config/loaders/database.loader';
import { DatabaseConfigType } from 'src/config/types/database.type';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfigLoader)],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get<DatabaseConfigType>('database');
        return {
          type: config.type,
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          synchronize: config.synchronize,
          autoLoadEntities: config.autoLoadEntities,
          migrationsTableName: config.migrationsTableName,
          cli: {
            migrationsDir: 'database/migration',
          },
        } as TypeOrmModuleAsyncOptions;
      },
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class CoreModule {}
