import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './schemas/store.schema';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

export const storeModel = {
  _id: '6394770b592711431a1c537b',
  name: 'TEST01',
  introduction: 'TEST01',
};

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
