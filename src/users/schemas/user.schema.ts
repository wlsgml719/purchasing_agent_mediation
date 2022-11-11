import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  password: string;

  @Prop({ unique: true })
  phone: number;

  @Prop()
  settlementAccount: string;

  @Prop({ default: Date.now })
  lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
