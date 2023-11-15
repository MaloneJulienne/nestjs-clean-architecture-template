import { Module } from "@nestjs/common";
import UserMapper from "@app/infrastructure/mappers/user.mapper";

@Module({
  providers: [UserMapper],
  exports: [UserMapper]
})
export class MappersModule {
}
