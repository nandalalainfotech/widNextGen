import { RnCurrencyTranslationsDTO } from "src/dto/rn_currency_translations.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_currency_translations", { schema: "wdinext" })
export class RnCurrencyTranslations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "currency_id", unsigned: true })
  currencyId: string;

  @Column("varchar", { name: "locale", length: 255 })
  locale: string;

  @Column("varchar", { name: "name", length: 250 })
  name: string;


  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null
	rnCurencyTranslations: any;


    setProperties(rnCurrencyTranslationsDTO: RnCurrencyTranslationsDTO) {
        this.id = rnCurrencyTranslationsDTO.id;
        this.currencyId = rnCurrencyTranslationsDTO.currencyId;
        this.locale = rnCurrencyTranslationsDTO.locale;
        this.name = rnCurrencyTranslationsDTO.name;
        this.createdBy = rnCurrencyTranslationsDTO.createdBy;
        this.createdAt = rnCurrencyTranslationsDTO.createdAt;
        this.updatedBy = rnCurrencyTranslationsDTO.updatedBy;
        this.updatedAt = rnCurrencyTranslationsDTO.updatedAt;
      }
  }
  