import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group001mb } from "./Group001mb";
import { Role001mb } from "./Role001mb";
import { UserDTO } from "src/dto/User.dto";

@Entity("users001mb", { schema: "wdinext" })
export class Users001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("varchar", { name: "firstname", nullable: true, length: 255 })
  firstname: string | null;

  @Column("varchar", { name: "lastname", nullable: true, length: 255 })
  lastname: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("int", { name: "role_id", nullable: true })
  roleId: number | null;

  @Column("int", { name: "groupId", nullable: true })
  groupId: number | null;

  // @Column("blob", { name: "avatar", nullable: true })
  // avatar: Buffer | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToMany(() => Group001mb, (group001mb) => group001mb.users001mbs)
  @JoinTable({
    name: "usergroup001mb",
    joinColumns: [{ name: "users001mb", referencedColumnName: "userId" }],
    inverseJoinColumns: [
      { name: "group001mb", referencedColumnName: "groupId" },
    ],
    schema: "wdinext",
  })
  group001mbs: Group001mb[];

  @ManyToMany(() => Role001mb, (role001mb) => role001mb.users001mbs)
  @JoinTable({
    name: "userrole001mb",
    joinColumns: [{ name: "users001mb", referencedColumnName: "userId" }],
    inverseJoinColumns: [{ name: "role001mb", referencedColumnName: "roleId" }],
    schema: "wdinext",
  })
  role001mbs: Role001mb[];

  
  setProperties(userDTO: UserDTO) {
    this.userId = userDTO.userId;
    this.firstname = userDTO.firstname;
    this.lastname = userDTO.lastname;
    this.username = userDTO.username;
    this.roleId = userDTO.roleId;
    this.groupId = userDTO.groupId;
    this.password = userDTO.password;
    this.status = userDTO.status;
    this.email = userDTO.email;
    // this.avatar = userDTO.avatar;
    this.insertUser = userDTO.insertUser;
    this.insertDatetime = userDTO.insertDatetime;
    this.updatedUser = userDTO.updatedUser;
    this.updatedDatetime = userDTO.updatedDatetime;
    
  }
}
