import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: config.getDatabaseType(),
    host: config.getDatabaseHost(),
    database: config.getDatabaseName(),
    port: config.getDatabasePort(),
    schema: config.getDatabaseSchema(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: config.getDatabaseSync() || true,
    logging: true,
  }) as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
