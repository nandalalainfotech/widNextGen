import { RnLanguagesDTO } from "src/dto/rn_languages.dto";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RnRoles } from "./rn_roles.entity";

@Index("role_id", ["roleId"], {})
@Entity("rn_languages", { schema: "wdinext" })
export class RnLanguages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "locale", length: 3 })
  locale: string;

  @Column("varchar", { name: "iso_code", length: 10 })
  isoCode: string;

  @Column("varchar", { name: "direction", length: 3 })
  direction: string;

  @Column("varchar", { name: "photo", length: 120 })
  photo: string;

  @Column("int", { name: "ordering", default: () => "'0'" })
  ordering: number;

  @Column("int", { name: "default", default: () => "'0'" })
  default: number;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("int", { name: "role_id" })
  roleId: number;

  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnLanguages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: RnRoles;

  setProperties(rnLanguagesDTO: RnLanguagesDTO) {
    this.id = rnLanguagesDTO.id;
    this.name = rnLanguagesDTO.name;
    this.locale = rnLanguagesDTO.locale;
    this.isoCode = rnLanguagesDTO.isoCode;
    this.roleId = rnLanguagesDTO.roleId;
    this.direction = rnLanguagesDTO.direction;
    this.photo = rnLanguagesDTO.photo;
    this.ordering = rnLanguagesDTO.ordering;
    this.default = rnLanguagesDTO.default;
    this.status = rnLanguagesDTO.status;
    this.insertUser = rnLanguagesDTO.insertUser;
    this.insertDatetime = rnLanguagesDTO.insertDatetime;
    this.updatedUser = rnLanguagesDTO.updatedUser;
    this.updatedDatetime = rnLanguagesDTO.updatedDatetime;
  }
}