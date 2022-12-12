import {
  Body,
  Controller,
  Delete,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateStoreDto } from './dto/create-store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body() createStoreDto: CreateStoreDto) {
    return await this.storeService.create(req.user, createStoreDto);
  }

  @Delete()
  async delete(@Query('storeId') storeId: string) {
    return await this.storeService.delete(storeId);
  }
}
