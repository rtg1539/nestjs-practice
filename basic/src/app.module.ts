import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from './config/config.module';
import { CustomModule } from './custom/custom.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.register({ folder: './config' }),
    CustomModule,
    ExceptionsModule,
    PipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
