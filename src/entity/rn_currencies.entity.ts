import { RnCurrenciesDTO } from "src/dto/rn_currencies.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_currencies", { schema: "wdinext" })
export class RnCurrencies {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "code", length: 6 })
  code: string;

  @Column("varchar", { name: "symbol", length: 3 })
  symbol: string;

  @Column("tinyint", { name: "default", unsigned: true, default: () => "'0'" })
  default: number;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  setProperties(rnCurrenciesDTO: RnCurrenciesDTO) {
    this.id = rnCurrenciesDTO.id;
    this.code = rnCurrenciesDTO.code;
    this.symbol = rnCurrenciesDTO.symbol;
    this.default = rnCurrenciesDTO.default;
    this.createdBy = rnCurrenciesDTO.createdBy;
    this.createdAt = rnCurrenciesDTO.createdAt;
    this.updatedBy = rnCurrenciesDTO.updatedBy;
    this.updatedAt = rnCurrenciesDTO.updatedAt;
  }
}
