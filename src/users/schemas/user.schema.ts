import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone: number;

  @Prop()
  settlementAccount: string;

  @Prop({ default: Date.now })
  lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
