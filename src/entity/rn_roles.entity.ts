import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RnUsers } from "./rn_users.entity";
import { RnPermissions } from "./rn_permissions.entity";
import { RnPages } from "./rn_pages.entity";
import { RnPageTranslations } from "./rn_page_translations.entity";
import { RnLanguages } from "./rn_languages.entity";
import { RnCurrencyTranslations } from "./rn_currency_translations.entity";
import { RnCurrencies } from "./rn_currencies.entity";
import { RnCategories } from "./rn_reviewcategories.entity";
import { RnRolesDTO } from "src/dto/rn_roles.dto";
import { RnCategoryTranslations } from "./rn_reviewcategory_translations.entity";


@Entity("rn_roles", { schema: "wdinext" })
export class RnRoles {
  @PrimaryGeneratedColumn({ type: "int", name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "rolename", length: 40 })
  rolename: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @OneToMany(
    () => RnCategoryTranslations,
    (rnCategoryTranslations) => rnCategoryTranslations.role
  )
  rnCategoryTranslations: RnCategoryTranslations[];

  @OneToMany(() => RnCategories, (rnCategories) => rnCategories.role)
  rnCategories: RnCategories[];

  @OneToMany(() => RnCurrencies, (rnCurrencies) => rnCurrencies.role)
  rnCurrencies: RnCurrencies[];

  @OneToMany(
    () => RnCurrencyTranslations,
    (rnCurrencyTranslations) => rnCurrencyTranslations.role
  )
  rnCurrencyTranslations: RnCurrencyTranslations[];

  @OneToMany(() => RnLanguages, (rnLanguages) => rnLanguages.role)
  rnLanguages: RnLanguages[];

  @OneToMany(
    () => RnPageTranslations,
    (rnPageTranslations) => rnPageTranslations.role
  )
  rnPageTranslations: RnPageTranslations[];

  @OneToMany(() => RnPages, (rnPages) => rnPages.role)
  rnPages: RnPages[];

  @OneToMany(() => RnPermissions, (rnPermissions) => rnPermissions.role)
  rnPermissions: RnPermissions[];

  @OneToMany(() => RnUsers, (rnUsers) => rnUsers.role)
  rnUsers: RnUsers[];



  setProperties(rnRolesDTO: RnRolesDTO) {
    this.roleId = rnRolesDTO.roleId;
    this.rolename = rnRolesDTO.rolename;
    this.insertUser = rnRolesDTO.insertUser;
    this.insertDatetime = rnRolesDTO.insertDatetime;
    this.updatedUser = rnRolesDTO.updatedUser;
    this.updatedDatetime = rnRolesDTO.updatedDatetime;
  }
}
