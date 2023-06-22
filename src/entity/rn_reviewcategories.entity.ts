import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { RnCategoryTranslations } from "./rn_reviewcategory_translations.entity";
import { RnRoles } from "./rn_roles.entity";
import { RnCategoriesDTO } from "src/dto/rn_reviewcategories.dto";
  
  @Index("role_id", ["roleId"], {})
  @Entity("rn_categories", { schema: "wdinext" })
  export class RnCategories {
    @PrimaryGeneratedColumn({ type: "int", name: "category_id" })
    categoryId: number;
  
    @Column("varchar", { name: "image", length: 180 })
    image: string;
  
    @Column("int", { name: "role_id" })
    roleId: number;
  
    @Column("int", { name: "status", default: () => "'0'" })
    status: number;
  
    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;
  
    @Column("datetime", { name: "insert_datetime", nullable: true })
    insertDatetime: Date | null;
  
    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;
  
    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;
  
    @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnCategories, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
    role: RnRoles;
  
    @OneToMany(
      () => RnCategoryTranslations,
      (rnCategoryTranslations) => rnCategoryTranslations.category
    )
    rnCategoryTranslations: RnCategoryTranslations[];
  
  

  setProperties(rnCategoriesDTO: RnCategoriesDTO) {
    this.categoryId = rnCategoriesDTO.categoryId;
    this.image = rnCategoriesDTO.image;
    this.status = rnCategoriesDTO.status;
    this.roleId = rnCategoriesDTO.roleId;
    this.insertUser = rnCategoriesDTO.insertUser;
    this.insertDatetime = rnCategoriesDTO.insertDatetime;
    this.updatedUser = rnCategoriesDTO.updatedUser;
    this.updatedDatetime = rnCategoriesDTO.updatedDatetime;
  }
}
