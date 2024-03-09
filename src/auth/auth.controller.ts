/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  @Post()
  create(@Body() user: any){
    return user
  }
}
