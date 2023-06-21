import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RnRoles } from "./rn_roles";
import { RnPermissionsDTO } from "src/dto/rn_permissions.dto";


@Index("role_id", ["roleId"], {})
@Entity("rn_permissions", { schema: "wdinext" })
export class RnPermissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "controller", length: 40 })
  controller: string;

  @Column("varchar", { name: "get", length: 40 })
  get: string;

  @Column("varchar", { name: "put", length: 40 })
  put: string;

  @Column("int", { name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnPermissions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: RnRoles;
    
  setProperties(rnPermissionsDTO: RnPermissionsDTO) {
    this.id = rnPermissionsDTO.id;
    this.controller = rnPermissionsDTO.controller;
    this.get = rnPermissionsDTO.get;
    this.put = rnPermissionsDTO.put;
    this.roleId = rnPermissionsDTO.roleId;
    this.insertUser = rnPermissionsDTO.insertUser;
    this.insertDatetime = rnPermissionsDTO.insertDatetime;
    this.updatedUser = rnPermissionsDTO.updatedUser;
    this.updatedDatetime = rnPermissionsDTO.updatedDatetime;
  }
}
