import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
  @Prop()
  name: string;

  @Prop()
  introduction?: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
