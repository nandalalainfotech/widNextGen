import { RnCategoriesDTO } from "src/dto/rn_reviewcategories.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_categories", { schema: "wdinext" })
export class RnCategories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "image", length: 180 })
  image: string;

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
  
  

  setProperties(rnCategoriesDTO: RnCategoriesDTO) {
    this.id = rnCategoriesDTO.id;
    this.image = rnCategoriesDTO.image;
    this.status = rnCategoriesDTO.status;
    this.createdBy = rnCategoriesDTO.createdBy;
    this.createdAt = rnCategoriesDTO.createdAt;
    this.updatedBy = rnCategoriesDTO.updatedBy;
    this.updatedAt = rnCategoriesDTO.updatedAt;
}
}
