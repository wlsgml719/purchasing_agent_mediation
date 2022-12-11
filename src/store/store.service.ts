import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store, StoreDocument } from './schemas/store.schema';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<StoreDocument>,
  ) {}

  async create(user, createStoreDto: CreateStoreDto): Promise<Store> {
    if (user.role != 'Seller') throw new ForbiddenException();

    const createdStore = new this.storeModel(createStoreDto);
    return createdStore.save();
  }
}
