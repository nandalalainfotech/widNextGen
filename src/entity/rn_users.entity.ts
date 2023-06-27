import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RnRoles } from "./rn_roles.entity";
import { Users } from "src/dto/rn_users.dto";

@Index("role_id", ["roleId"], {})
@Entity("rn_users", { schema: "wdinext" })
export class RnUsers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "role_id", unsigned: true })
  roleId: string;

  @Column("varchar", { name: "first_name", length: 45 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 45 })
  lastName: string;

  @Column("varchar", { name: "username", length: 40 })
  username: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("varchar", { name: "mobile", nullable: true, length: 15 })
  mobile: string | null;

  @Column("int", { name: "status", unsigned: true, default: () => "'0'" })
  status: number;

  @Column("varchar", { name: "email", length: 120 })
  email: string;

  @Column("varchar", {
    name: "avatar",
    length: 255,
    default: () => "'default_avatar.jpg'",
  })
  avatar: string;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: RnRoles;

  
  setProperties(users: Users) {
    this.id = users.id;
    this.roleId = users.roleId;
    this.firstName = users.firstName;
    this.lastName = users.lastName;
    this.username = users.username;
    this.password = users.password;
    this.mobile = users.mobile;
    this.status = users.status;
    this.email = users.email;
    this.avatar = users.avatar;
    this.createdBy = users.createdBy;
    this.createdAt = users.createdAt;
    this.updatedBy = users.updatedBy;
    this.updatedAt = users.updatedAt;
    
  }
}
