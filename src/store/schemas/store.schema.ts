import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  introduction?: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
