import { IsNotEmpty, IsString } from "class-validator";

export default class ExempleDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
