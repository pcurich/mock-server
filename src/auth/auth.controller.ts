import { QuerySearch } from './../shared/entities/search.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Query, } from '@nestjs/common';
import { Request, Response } from "express";
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { QuerySearchPipe } from 'src/shared/pipe/query-search/query-search.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @Get('/index')
  // index(@Req() request: Request, @Res() response: Response) {
  //   response.status(200).json({
  //     data: 1
  //   })
  // }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll(@Query(QuerySearchPipe) query: { QuerySearch: QuerySearch }) {

    console.log("query", query);

    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
