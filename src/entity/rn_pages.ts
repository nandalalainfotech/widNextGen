import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { RnRoles } from "./rn_roles";
import { RnPagesDTO } from "src/dto/rn_pages.dto";

  
  @Index("role_id", ["roleId"], {})
  @Entity("rn_pages", { schema: "wdinext" })
  export class RnPages {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;
  
    @Column("varchar", { name: "type", nullable: true, length: 255 })
    type: string | null;
  
    @Column("int", { name: "status", nullable: true })
    status: number | null;
  
    @Column("int", { name: "role_id" })
    roleId: number;
  
    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;
  
    @Column("datetime", { name: "insert_datetime" })
    insertDatetime: Date | null;
  
    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;
  
    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;
  
    @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnPages, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
    role: RnRoles;

    
    setProperties(rnPagesDTO: RnPagesDTO) {
        this.id = rnPagesDTO.id;
        this.type = rnPagesDTO.type;
        this.status = rnPagesDTO.status;
        this.roleId = rnPagesDTO.roleId;
        this.insertUser = rnPagesDTO.insertUser;
        this.insertDatetime = rnPagesDTO.insertDatetime;
        this.updatedUser = rnPagesDTO.updatedUser;
        this.updatedDatetime = rnPagesDTO.updatedDatetime;
      }
    }