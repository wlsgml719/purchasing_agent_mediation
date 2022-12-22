import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

export const userModel = {
  _id: '63860521279deb3e908a190a',
  email: '02wlsgml@gmail.com',
  password: '$2b$10$5j1109dYgx4tp4I23Iq6Fe.9pj8GCm2FTgtkgDCJu6ndy.JluUH6S',
  phone: '+82 01033503688',
};

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
