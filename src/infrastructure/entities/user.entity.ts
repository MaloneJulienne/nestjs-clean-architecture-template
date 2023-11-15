import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "integer" })
  id: number;

  @Column("varchar", { length: 255 })
  username: string;

  @Column("varchar", { length: 255, nullable: true })
  firstName: string;

  @Column("varchar", { length: 255, nullable: true })
  lastName: string;

  @Column("varchar", { length: 255, nullable: true })
  name: string;

  @Column("varchar", { length: 255 })
  password: string;
}
