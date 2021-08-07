import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
  findAll() {
    return this.pipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
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
