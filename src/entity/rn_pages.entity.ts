import { RnPagesDTO } from "src/dto/rn_pages.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_pages", { schema: "wdinext" })
export class RnPages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "type", nullable: true, length: 12 })
  type: string | null;

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

    
    setProperties(rnPagesDTO: RnPagesDTO) {
        this.id = rnPagesDTO.id;
        this.type = rnPagesDTO.type;
        this.status = rnPagesDTO.status;
        this.createdBy = rnPagesDTO.createdBy;
        this.createdAt = rnPagesDTO.createdAt;
        this.updatedBy = rnPagesDTO.updatedBy;
        this.updatedAt = rnPagesDTO.updatedAt;
      }
    }