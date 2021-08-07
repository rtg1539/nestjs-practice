import { Module, ValidationPipe } from '@nestjs/common';
import { PipesService } from './pipes.service';
import { PipesController } from './pipes.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PipesController],
  providers: [PipesService, { provide: APP_PIPE, useClass: ValidationPipe }]
})
export class PipesModule {}
