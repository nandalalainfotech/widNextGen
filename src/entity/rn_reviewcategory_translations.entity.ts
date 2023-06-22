import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RnCategories } from "./rn_reviewcategories.entity";
import { RnRoles } from "./rn_roles.entity";
import { RnCategoryTranslationsDTO } from "src/dto/rn_category_translations.dto";

@Index("category_id", ["categoryId"], {})
@Index("role_id", ["roleId"], {})
@Entity("rn_category_translations", { schema: "wdinext" })
export class RnCategoryTranslations {
  @Column("int", { primary: true, name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "role_id" })
  roleId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "locale", length: 255 })
  locale: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnCategoryTranslations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: RnRoles;

  @ManyToOne(
    () => RnCategories,
    (rnCategories) => rnCategories.rnCategoryTranslations,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: RnCategories;

  
  setProperties(rnCategoryTranslationsDTO: RnCategoryTranslationsDTO) {
    this.id = rnCategoryTranslationsDTO.id;
    this.roleId = rnCategoryTranslationsDTO.roleId;
    this.categoryId = rnCategoryTranslationsDTO.categoryId;
    this.locale = rnCategoryTranslationsDTO.locale;
    this.name = rnCategoryTranslationsDTO.name;
    this.insertUser = rnCategoryTranslationsDTO.insertUser;
    this.insertDatetime = rnCategoryTranslationsDTO.insertDatetime;
    this.updatedUser = rnCategoryTranslationsDTO.updatedUser;
    this.updatedDatetime = rnCategoryTranslationsDTO.updatedDatetime;
  }

}
