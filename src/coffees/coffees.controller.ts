import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
@Controller('coffees')
export class CoffeesController {
  // @Get()
  // findAll() {
  //   return 'This action return all coffees';
  // }

  @Get()
  findAll(@Res() response) {
    // 此处可以使用express原生方法（默认express），但会因不同底层库(express、fastify) 有不同的API,简易尽可能的使用nest标准方法
    response.status(200).send('This action return all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffees`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) // 设置HttpStatus为410
  create(@Body() body) {
    return body;
  }
}
