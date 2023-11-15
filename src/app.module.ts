import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UsecasesProxyModule } from '@app/infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { MappersModule } from './infrastructure/mappers/mappers.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    UsecasesProxyModule.register(),
    ControllersModule,
    MappersModule,
  ],
})
export class AppModule {}
