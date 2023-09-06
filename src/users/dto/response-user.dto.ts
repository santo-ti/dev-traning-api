import { User } from '../entities/user.entity';

export class ResponseUserDto {
  user: User;
  message: string;
}
