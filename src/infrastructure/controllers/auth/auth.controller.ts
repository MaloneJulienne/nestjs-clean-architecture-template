import { Body, Controller, Inject, Post } from "@nestjs/common";
import ExempleDto from "@app/infrastructure/controllers/auth/dtos/log-user.dto";
import { UsecasesProxyModule } from "@app/infrastructure/usecases-proxy/usecases-proxy.module";
import ExempleUsecase from "@app/usecases/exemple.usecase";
import { UseCaseProxy } from "@app/infrastructure/usecases-proxy/usecases-proxy";

@Controller("auth")
export class AuthController {
  constructor(
    @Inject(UsecasesProxyModule.EXEMPLE_USECASE)
    private readonly exempleUsecase: UseCaseProxy<ExempleUsecase>
  ) {
  }

  @Post("exemple")
  async exempleControllerMethod(@Body() dto: ExempleDto): Promise<any> {
    await this.exempleUsecase.getInstance().execute();
  }
}
