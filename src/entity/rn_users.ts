import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RnRoles } from "./rn_roles";
import { RnUsersDTO } from "src/dto/rn_users.dto";

@Index("role_id", ["roleId"], {})
@Entity("rn_users", { schema: "wdinext" })
export class RnUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("int", { name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "firstname", length: 45 })
  firstname: string;

  @Column("varchar", { name: "lastname", length: 45 })
  lastname: string;

  @Column("varchar", { name: "username", length: 40 })
  username: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("varchar", { name: "email", length: 30 })
  email: string;

  @Column("varchar", { name: "mobile_no", nullable: true, length: 15 })
  mobileNo: string | null;

  // @Column("blob", { name: "avatar", nullable: true })
  // avatar: Buffer | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnUsers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: RnRoles;
    static roleId: any;

  
  setProperties(rnUsersDTO: RnUsersDTO) {
    this.userId = rnUsersDTO.userId;
    this.firstname = rnUsersDTO.firstname;
    this.lastname = rnUsersDTO.lastname;
    this.username = rnUsersDTO.username;
    this.roleId = rnUsersDTO.roleId;
    this.password = rnUsersDTO.password;
    this.status = rnUsersDTO.status;
    this.email = rnUsersDTO.email;
    this.mobileNo = rnUsersDTO.mobileNo;
    // this.avatar = rnUsersDTO.avatar;
    this.insertUser = rnUsersDTO.insertUser;
    this.insertDatetime = rnUsersDTO.insertDatetime;
    this.updatedUser = rnUsersDTO.updatedUser;
    this.updatedDatetime = rnUsersDTO.updatedDatetime;
    
  }
}
