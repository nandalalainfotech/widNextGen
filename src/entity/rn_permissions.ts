import { RnPermissionsDTO } from "src/dto/rn_permissions.dto";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RnRoles } from "./rn_roles";


@Index("role_id", ["roleId"], {})
@Entity("rn_permissions", { schema: "wdinext" })
export class RnPermissions {
  @PrimaryGeneratedColumn({ type: "int", name: "prmsn_id" })
  prmsnId: number;

  @Column("varchar", { name: "permissionname", length: 40 })
  permissionname: string;

  @Column("int", { name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date | null;

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
    this.prmsnId = rnPermissionsDTO.prmsnId;
    this.permissionname = rnPermissionsDTO.permissionname;
    this.roleId = rnPermissionsDTO.roleId;
    this.insertUser = rnPermissionsDTO.insertUser;
    this.insertDatetime = rnPermissionsDTO.insertDatetime;
  }
}
