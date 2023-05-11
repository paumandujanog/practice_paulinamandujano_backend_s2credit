import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';

const relative: string = path.join(path.relative('.', __dirname), '..');
dotenv.config({ path: `${relative}/.env` });

export const AppDataSource = new DataSource(
    {
      type: 'postgres',
      host: process.env.MAIN_DB_HOST,
      port: parseInt(process.env.MAIN_DB_PORT, 10),
      username: process.env.MAIN_DB_USERNAME,
      password: process.env.MAIN_DB_PASSWORD,
      database: process.env.MAIN_DB_NAME,
      synchronize: process.env.MAIN_DB_SYNC === '1',
      migrationsTableName: 'migrations',
      entities: [`${relative}/src/users/domain/entities/*.ts`],
      migrations: [`${relative}/database/migration/*.ts`]
    }
);
   
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source se ha inicializado')
    })
    .catch((err) => {
        console.error('Error mientras se inicializaba Data Source', err)
    });