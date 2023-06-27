import { RnCategoryTranslationsDTO } from "src/dto/rn_category_translations.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_category_translations", { schema: "wdinext" })
export class RnCategoryTranslations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "locale", length: 255 })
  locale: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

    
  setProperties(rnCategoryTranslationsDTO: RnCategoryTranslationsDTO) {
    this.id = rnCategoryTranslationsDTO.id;
    this.categoryId = rnCategoryTranslationsDTO.categoryId;
    this.locale = rnCategoryTranslationsDTO.locale;
    this.name = rnCategoryTranslationsDTO.name;
    this.createdBy = rnCategoryTranslationsDTO.createdBy;
    this.createdAt = rnCategoryTranslationsDTO.createdAt;
    this.updatedBy = rnCategoryTranslationsDTO.updatedBy;
    this.updatedAt = rnCategoryTranslationsDTO.updatedAt;
  }
}