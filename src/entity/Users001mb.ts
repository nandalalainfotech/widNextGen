import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group001mb } from "./Group001mb";
import { Role001mb } from "./Role001mb";
import { UsersDTO } from "src/dto/Users.dto";

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

  @Column("int", { name: "groupid", unsigned: true })
  groupid: number;

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

  
  setProperties(usersDTO: UsersDTO) {
    this.userId = usersDTO.userId;
    this.firstname = usersDTO.firstname;
    this.lastname = usersDTO.lastname;
    this.username = usersDTO.username;
    this.roleId = usersDTO.roleId;
    this.groupid = usersDTO.groupid;
    this.password = usersDTO.password;
    this.status = usersDTO.status;
    this.email = usersDTO.email;
    this.insertUser = usersDTO.insertUser;
    this.insertDatetime = usersDTO.insertDatetime;
    this.updatedUser = usersDTO.updatedUser;
    this.updatedDatetime = usersDTO.updatedDatetime;
    
  }
}
