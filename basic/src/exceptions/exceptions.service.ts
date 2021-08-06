import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';
import { ForbiddenException } from './forbidden.exception';

@Injectable()
export class ExceptionsService {
  create(createExceptionDto: CreateExceptionDto) {
    return 'This action adds a new exception';
  }

  findAll() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'custom message',
      },
      HttpStatus.FORBIDDEN,
    );
    throw new ForbiddenException();
  }

  findOne(id: number) {
    return `This action returns a #${id} exception`;
  }

  update(id: number, updateExceptionDto: UpdateExceptionDto) {
    return `This action updates a #${id} exception`;
  }

  remove(id: number) {
    return `This action removes a #${id} exception`;
  }
}
