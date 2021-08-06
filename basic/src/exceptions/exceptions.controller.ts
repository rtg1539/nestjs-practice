import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';

@Controller('exceptions')
export class ExceptionsController {
  constructor(private readonly exceptionsService: ExceptionsService) {}

  @Post()
  create(@Body() createExceptionDto: CreateExceptionDto) {
    return this.exceptionsService.create(createExceptionDto);
  }

  @Get()
  findAll() {
    return this.exceptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exceptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExceptionDto: UpdateExceptionDto) {
    return this.exceptionsService.update(+id, updateExceptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exceptionsService.remove(+id);
  }
}
