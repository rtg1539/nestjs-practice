// nest g controller [name] --no-spec

import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

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

  // status code: 응답 코드를 성정해줌
  @Get('status')
  @HttpCode(204)
  create() {
    return 'ho ho';
  }

  // headers: 응답 헤더를 설정해줌
  @Get('header')
  @Header('Cache-Control', 'none')
  headerTest() {
    return 'a';
  }

  // redirection
  @Get('redirect')
  @Redirect('https://www.naver.com', 301)
  redirectTest() {
    return 'a';
  }

  // redirection2
  @Get('redirect2')
  @Redirect('https://www.naver.com', 301)
  redirectTest2(@Query('version') version) {
    // localhost:3000/api/cats/redirect2 => naver
    // localhost:3000/api/cats/redirect2?version=5 => google
    if (version && version === '5') {
      return { url: 'https:/www.google.com' };
    }
  }

  // route parameters
  /*
  @Get(':id')
  findOne(@Param() params) {
    console.log(params.id);
    return `hoho ${params.id}`;
  }

  @Get(':id/2')
  findOne2(@Param('id') id: string) {
    console.log(id);
    return `hoho ${id}`;
  }*/

  // asynchronicity
  @Get('async')
  async asynchronous() {
    return [];
  }

  @Get('observe')
  observable(): Observable<any[]> {
    return of([]);
  }
}
