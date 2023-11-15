import { DynamicModule, Module } from "@nestjs/common";
import { UseCaseProxy } from "@app/infrastructure/usecases-proxy/usecases-proxy";
import { RepositoriesModule } from "@app/infrastructure/repositories/repositories.module";
import { TypeOrmUserRepository } from "@app/infrastructure/repositories/user.repository";
import ExempleUsecase from "@app/usecases/exemple.usecase";

@Module({
  imports: [RepositoriesModule]
})
export class UsecasesProxyModule {
  static EXEMPLE_USECASE: string = "ExempleUsecase";

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [TypeOrmUserRepository],
          provide: UsecasesProxyModule.EXEMPLE_USECASE,
          useFactory: (userRepository: TypeOrmUserRepository) =>
            new UseCaseProxy(new ExempleUsecase(userRepository))
        }
      ],
      exports: [
        UsecasesProxyModule.EXEMPLE_USECASE
      ]
    };
  }
}
