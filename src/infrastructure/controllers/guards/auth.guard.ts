import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    throw new Error("Not yet implemented.");
  }
}
