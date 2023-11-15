import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentConfigService } from '@app/infrastructure/config/environment-config/environment-config.service';
import { ConfigService } from '@nestjs/config';

describe('INFRASTRUCTURE', (): void => {
  describe('CONFIG', (): void => {
    describe('environment-config', (): void => {
      let configService: EnvironmentConfigService;
      let configServiceMock: Record<string, jest.Mock>;
      beforeEach(async (): Promise<void> => {
        configServiceMock = {
          get: jest.fn(),
        };

        const moduleRef: TestingModule = await Test.createTestingModule({
          providers: [
            EnvironmentConfigService,
            {
              provide: ConfigService,
              useValue: configServiceMock,
            },
          ],
        }).compile();

        configService = await moduleRef.resolve(EnvironmentConfigService);
      });

      it('should exist', (): void => {
        expect(configService).toBeDefined();
      });

      describe('Methods', (): void => {
        describe('getDatabaseHost', (): void => {
          it('should return env database host', (): void => {
            configServiceMock.get.mockReturnValueOnce('localhost');
            expect(configService.getDatabaseHost()).toBe('localhost');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseHost()).toBeUndefined();
          });
        });

        describe('getDatabasePort', (): void => {
          it('should return env database port', (): void => {
            configServiceMock.get.mockReturnValueOnce(3000);
            expect(configService.getDatabasePort()).toBe(3000);
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabasePort()).toBeUndefined();
          });
        });

        describe('getDatabaseUser', (): void => {
          it('should return env database user', (): void => {
            configServiceMock.get.mockReturnValueOnce('user');
            expect(configService.getDatabaseUser()).toBe('user');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseUser()).toBeUndefined();
          });
        });

        describe('getDatabasePassword', (): void => {
          it('should return env database password', (): void => {
            configServiceMock.get.mockReturnValueOnce('password');
            expect(configService.getDatabasePassword()).toBe('password');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabasePassword()).toBeUndefined();
          });
        });

        describe('getDatabaseName', (): void => {
          it('should return env database name', (): void => {
            configServiceMock.get.mockReturnValueOnce('main');
            expect(configService.getDatabaseName()).toBe('main');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseName()).toBeUndefined();
          });
        });

        describe('getDatabaseSchema', (): void => {
          it('should return env database schema', (): void => {
            configServiceMock.get.mockReturnValueOnce('public');
            expect(configService.getDatabaseSchema()).toBe('public');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseSchema()).toBeUndefined();
          });
        });

        describe('getDatabaseSync', (): void => {
          it('should return env database synchronize property', (): void => {
            configServiceMock.get.mockReturnValueOnce(true);
            expect(configService.getDatabaseSync()).toBe(true);

            configServiceMock.get.mockReturnValueOnce(false);
            expect(configService.getDatabaseSync()).toBe(false);
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseSync()).toBeUndefined();
          });
        });

        describe('getDatabaseType', (): void => {
          it('should return env database synchronize property', (): void => {
            configServiceMock.get.mockReturnValueOnce('postgres');
            expect(configService.getDatabaseType()).toBe('postgres');
          });

          it('should return "undefined" if env value is not defined', (): void => {
            expect(configService.getDatabaseSync()).toBeUndefined();
          });
        });
      });
    });
  });
});
