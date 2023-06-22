import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { RnCurrencyTranslationsDTO } from "src/dto/rn_reviewcurrency_translations.dto";
import { RnRoles } from "./rn_roles.entity";
  
  @Index("role_id", ["roleId"], {})
  @Entity("rn_currency_translations", { schema: "wdinext" })
  export class RnCurrencyTranslations {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: number;
  
    @Column("int", { name: "role_id" })
    roleId: number;
  
    @Column("bigint", { name: "currency_id", unsigned: true })
    currencyId: string;
  
    @Column("varchar", { name: "locale", length: 255 })
    locale: string;
  
    @Column("varchar", { name: "name", length: 250 })
    name: string;
  
    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;
  
    @Column("datetime", { name: "insert_datetime", nullable: true })
    insertDatetime: Date | null;
  
    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;
  
    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;
  
    @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnCurrencyTranslations, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
    role: RnRoles;

    setProperties(rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO) {
        this.id = rnCurrencyTranslationsDTO.id;
        this.currencyId = rnCurrencyTranslationsDTO.currencyId;
        this.locale = rnCurrencyTranslationsDTO.locale;
        this.name = rnCurrencyTranslationsDTO.name;
        this.roleId = rnCurrencyTranslationsDTO.roleId;
        this.insertUser = rnCurrencyTranslationsDTO.insertUser;
        this.insertDatetime = rnCurrencyTranslationsDTO.insertDatetime;
        this.updatedUser = rnCurrencyTranslationsDTO.updatedUser;
        this.updatedDatetime = rnCurrencyTranslationsDTO.updatedDatetime;
      }
  }
  