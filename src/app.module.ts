import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from './config/config.module';
import { options } from './config/options/config.options';

@Module({
  imports: [UserModule, CoreModule, ConfigModule.forRoot(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
