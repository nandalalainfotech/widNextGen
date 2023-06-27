import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RnUsers } from "./rn_users.entity";
import { RnPermissions } from "./rn_permissions.entity";
import { RnRolesDTO } from "src/dto/rn_roles.dto";

@Entity("rn_roles", { schema: "wdinext" })
export class RnRoles {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 40 })
  name: string;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => RnPermissions, (rnPermissions) => rnPermissions.role)
  rnPermissions: RnPermissions[];

  @OneToMany(() => RnUsers, (rnUsers) => rnUsers.role)
  rnUsers: RnUsers[];


  setProperties(rnRolesDTO: RnRolesDTO) {
    this.id = rnRolesDTO.id;
    this.name = rnRolesDTO.name;
    this.createdBy = rnRolesDTO.createdBy;
    this.createdAt = rnRolesDTO.createdAt;
    this.updatedBy = rnRolesDTO.updatedBy;
    this.updatedAt = rnRolesDTO.updatedAt;
  }
}
