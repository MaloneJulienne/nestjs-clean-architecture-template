import { User as UserEntity } from '@app/infrastructure/entities/user.entity';
import { Injectable } from '@nestjs/common';
import User from '@app/domain/entities/user.entity';

@Injectable()
export default class UserMapper {
  public mapToDomainUser(user: UserEntity): User {
    if (user) {
      const domainUser: User = new User();
      domainUser.id = user.id;
      domainUser.username = user.username;
      domainUser.password = user.password;

      return domainUser;
    } else {
      return undefined;
    }
  }
}
