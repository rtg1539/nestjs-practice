import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';

@Controller('guard')
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  @SetMetadata('roles',['admin'])
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  findAll() {
    return this.guardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
