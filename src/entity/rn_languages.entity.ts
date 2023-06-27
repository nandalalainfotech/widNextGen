import { RnLanguagesDTO } from "src/dto/rn_languages.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_languages", { schema: "wdinext" })
export class RnLanguages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "locale", length: 3 })
  locale: string;

  @Column("varchar", { name: "iso_code", length: 10 })
  isoCode: string;

  @Column("varchar", { name: "direction", length: 3 })
  direction: string;

  @Column("varchar", { name: "image", length: 120 })
  image: string;

  @Column("int", { name: "ordering", default: () => "'0'" })
  ordering: number;

  @Column("int", { name: "default", default: () => "'0'" })
  default: number;

  @Column("tinyint", { name: "status", unsigned: true, default: () => "'0'" })
  status: number;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  setProperties(rnLanguagesDTO: RnLanguagesDTO) {
    this.id = rnLanguagesDTO.id;
    this.name = rnLanguagesDTO.name;
    this.locale = rnLanguagesDTO.locale;
    this.isoCode = rnLanguagesDTO.isoCode;
    this.direction = rnLanguagesDTO.direction;
    this.image = rnLanguagesDTO.image;
    this.ordering = rnLanguagesDTO.ordering;
    this.default = rnLanguagesDTO.default;
    this.status = rnLanguagesDTO.status;
    this.createdBy = rnLanguagesDTO.createdBy;
    this.createdAt = rnLanguagesDTO.createdAt;
    this.updatedBy = rnLanguagesDTO.updatedBy;
    this.updatedAt = rnLanguagesDTO.updatedAt;
  }
}