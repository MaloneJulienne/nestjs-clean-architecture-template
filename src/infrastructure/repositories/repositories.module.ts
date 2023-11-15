import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigModule } from "../config/typeorm/typeorm.module";
import { User as UserEntity } from "@app/infrastructure/entities/user.entity";
import { MappersModule } from "@app/infrastructure/mappers/mappers.module";
import { TypeOrmUserRepository } from "@app/infrastructure/repositories/user.repository";

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    MappersModule
  ],
  providers: [
    TypeOrmUserRepository
  ],
  exports: [
    TypeOrmUserRepository
  ]
})
export class RepositoriesModule {
}
