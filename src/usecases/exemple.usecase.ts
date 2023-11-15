import UserRepository from "@app/domain/repositories/user.repository.interface";

export default class ExempleUsecase {
  constructor(private readonly exempleRepository: UserRepository) {
  }

  public async execute(): Promise<void> {
    throw new Error("Not yet implemented.");
  }
}
