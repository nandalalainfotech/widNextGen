import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission001mb } from "./Permission001mb";
import { Users001mb } from "./Users001mb";
import { RoleDTO } from "src/dto/Role.dto";

@Entity("role001mb", { schema: "wdinext" })
export class Role001mb {
  @PrimaryGeneratedColumn({ type: "smallint", name: "role_id", unsigned: true })
  roleId: number;

  @Column("varchar", { name: "rolename", nullable: true, length: 255 })
  rolename: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToMany(() => Permission001mb,(permission001mb) => permission001mb.role001mbs)
  permission001mbs: Permission001mb[];

  @ManyToMany(() => Users001mb, (users001mb) => users001mb.role001mbs)
  users001mbs: Users001mb[];

  setProperties(roleDTO: RoleDTO) {
    this.roleId = roleDTO.roleId;
    this.rolename = roleDTO.rolename;
    this.insertUser = roleDTO.insertUser;
    this.insertDatetime = roleDTO.insertDatetime;
    this.updatedUser = roleDTO.updatedUser;
    this.updatedDatetime = roleDTO.updatedDatetime;
  }
}
