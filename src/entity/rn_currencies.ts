import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { RnRoles } from "./rn_roles";
import { RnCurrenciesDTO } from "src/dto/rn_currencies.dto";
  
  @Index("role_id", ["roleId"], {})
  @Entity("rn_currencies", { schema: "wdinext" })
  export class RnCurrencies {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: number;
  
    @Column("varchar", { name: "code", length: 6 })
    code: string;
  
    @Column("varchar", { name: "symbol", length: 3 })
    symbol: string;
  
    @Column("int", { name: "role_id" })
    roleId: number;
  
    @Column("varchar", { name: "region_code", length: 8 })
    regionCode: string;
  
    @Column("varchar", { name: "photo", length: 120 })
    photo: string;
  
    @Column("tinyint", { name: "default", unsigned: true, default: () => "'0'" })
    default: number;
  
    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;
  
    @Column("datetime", { name: "insert_datetime", nullable: true })
    insertDatetime: Date | null;
  
    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;
  
    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;
  
    @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnCurrencies, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
    role: RnRoles;

    setProperties(rnCurrenciesDTO: RnCurrenciesDTO) {
        this.id = rnCurrenciesDTO.id;
        this.code = rnCurrenciesDTO.code;
        this.symbol = rnCurrenciesDTO.symbol;
        this.regionCode = rnCurrenciesDTO.regionCode;
        this.roleId = rnCurrenciesDTO.roleId;
        this.photo = rnCurrenciesDTO.photo;
        this.photo = rnCurrenciesDTO.photo;
        this.default = rnCurrenciesDTO.default;
        this.insertUser = rnCurrenciesDTO.insertUser;
        this.insertDatetime = rnCurrenciesDTO.insertDatetime;
        this.updatedUser = rnCurrenciesDTO.updatedUser;
        this.updatedDatetime = rnCurrenciesDTO.updatedDatetime;
      }
  }
  