import {
  Body,
  Controller, DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  Param, ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post, Query,
} from '@nestjs/common';
import { PipesService } from './pipes.service';
import { CreatePipeDto } from './dto/create-pipe.dto';
import { UpdatePipeDto } from './dto/update-pipe.dto';

@Controller('pipes')
export class PipesController {
  constructor(private readonly pipesService: PipesService) {}

  @Post()
  create(@Body() createPipeDto: CreatePipeDto) {
    return this.pipesService.create(createPipeDto);
  }

  @Get()
  findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return this.pipesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.pipesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePipeDto: UpdatePipeDto) {
    return this.pipesService.update(+id, updatePipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pipesService.remove(+id);
  }
}
