import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  async findOne(email) {
    return await this.userService.findOne(email);
  }

  @Post('signUp')
  @HttpCode(201)
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.signUp(createUserDto);
  }
}
