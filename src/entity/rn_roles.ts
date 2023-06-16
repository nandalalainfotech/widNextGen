import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RnRolesDTO } from "src/dto/rn_roles.dto";
import { RnUsers } from "./rn_users";
import { RnPermissions } from "./rn_permissions";

@Entity("rn_roles", { schema: "wdinext" })
export class RnRoles {
  @PrimaryGeneratedColumn({ type: "int", name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "rolename", length: 40 })
  rolename: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(() => RnPermissions, (rnPermissions) => rnPermissions.role)
  rnPermissions: RnPermissions[];

  @OneToMany(() => RnUsers, (rnUsers) => rnUsers.role)
  rnUsers: RnUsers[];

  setProperties(rnRolesDTO: RnRolesDTO) {
    this.roleId = rnRolesDTO.roleId;
    this.rolename = rnRolesDTO.rolename;
    this.insertUser = rnRolesDTO.insertUser;
    this.insertDatetime = rnRolesDTO.insertDatetime;
    this.updatedUser = rnRolesDTO.updatedUser;
    this.updatedDatetime = rnRolesDTO.updatedDatetime;
  }
}
