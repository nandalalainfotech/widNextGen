import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role001mb } from "./Role001mb";
import { PermissionDTO } from "src/dto/permission.dto";

@Entity("permission001mb", { schema: "wdinext" })
export class Permission001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "prmsn_id", unsigned: true })
  prmsnId: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "role_id", default: () => "'0'" })
  roleId: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToMany(() => Role001mb, (role001mb) => role001mb.permission001mbs)
  @JoinTable({
    name: "rolepermission001mb",
    joinColumns: [{ name: "permission001mb", referencedColumnName: "prmsnId" }],
    inverseJoinColumns: [{ name: "role001mb", referencedColumnName: "roleId" }],
    schema: "wdinext",
  })
  role001mbs: Role001mb[];

    
  setProperties(permissionDTO: PermissionDTO) {
    this.prmsnId = permissionDTO.prmsnId;
    this.name = permissionDTO.name;
    this.roleId = permissionDTO.roleId;
    this.insertUser = permissionDTO.insertUser;
    this.insertDatetime = permissionDTO.insertDatetime;
  }
}
