import { Module } from "@nestjs/common";
import { UsecasesProxyModule } from "@app/infrastructure/usecases-proxy/usecases-proxy.module";
import { MappersModule } from "@app/infrastructure/mappers/mappers.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigModule } from "@app/infrastructure/config/typeorm/typeorm.module";
import { User } from "@app/infrastructure/entities/user.entity";
import { AuthController } from "@app/infrastructure/controllers/auth/auth.controller";

@Module({
  imports: [
    UsecasesProxyModule.register(),
    MappersModule,
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([User])
  ],
  providers: [],
  controllers: [AuthController]
})
export class ControllersModule {
}
