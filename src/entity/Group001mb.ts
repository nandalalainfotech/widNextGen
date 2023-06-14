import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users001mb } from "./Users001mb";
import { GroupDTO } from "src/dto/Group.dto";

@Entity("group001mb", { schema: "wdinext" })
export class Group001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "group_id", unsigned: true })
  groupId: number;

  @Column("varchar", { name: "groupname", nullable: true, length: 255 })
  groupname: string | null;

  @Column("int", { name: "role_id", nullable: true })
  roleId: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToMany(() => Users001mb, (users001mb) => users001mb.group001mbs)
  users001mbs: Users001mb[];


  setProperties(groupDTO: GroupDTO) {
    this.groupId = groupDTO.groupId;
    this.groupname = groupDTO.groupname;
    this.roleId = groupDTO.roleId;
    this.insertUser = groupDTO.insertUser;
    this.insertDatetime = groupDTO.insertDatetime;
  }
}
