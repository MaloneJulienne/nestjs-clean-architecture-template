import User from "@app/domain/entities/user.entity";

export default interface UserRepository {

  methodExemple(id: number): Promise<User>;
}
