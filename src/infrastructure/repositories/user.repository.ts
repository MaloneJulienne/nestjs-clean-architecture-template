import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "@app/domain/entities/user.entity";
import { User as UserEntity } from "@app/infrastructure/entities/user.entity";
import { Repository } from "typeorm";
import UserRepository from "@app/domain/repositories/user.repository.interface";

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
  }

  async methodExemple(id: number): Promise<User> {
    const user: UserEntity = await this.userRepository.findOne({ where: { id: 1 } });
    throw new Error("Not yet implemented");
  }
}
