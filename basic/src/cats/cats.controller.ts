// nest g controller [name] --no-spec

import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'ho ho';
  }

  // post
  @Post()
  postpost() {
    return 'popost';
  }


  // request
  @Get('req')
  findAllReq(@Req() request: Request) {
    console.log(request);
    console.log(request.params);
    return 'req ho ho';
  }

  // status code
  @Get('status')
  @HttpCode(204)
  create() {
    return 'ho ho';
  }
}
