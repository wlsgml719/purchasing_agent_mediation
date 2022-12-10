import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateStoreDto } from './dto/create-store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createStoreDto: CreateStoreDto) {
    return await this.storeService.create(createStoreDto);
  }
}
