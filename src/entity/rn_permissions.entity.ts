import { RnPermissionsDTO } from "src/dto/rn_permissions.dto";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RnRoles } from "./rn_roles.entity";

@Entity("rn_permissions", { schema: "wdinext" })
export class RnPermissions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("int", { name: "role_id" })
  roleId: string;

  @Column("varchar", { name: "controller", length: 40 })
  controller: string;

  @Column("varchar", { name: "action_view", length: 40 })
  actionView: string;

  @Column("varchar", { name: "action_create", length: 40 })
  actionCreate: string;

  @Column("varchar", { name: "action_update", length: 40 })
  actionUpdate: string;

  @Column("varchar", { name: "action_delete", length: 40 })
  actionDelete: string;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
  
  @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: RnRoles;
    
  setProperties(rnPermissionsDTO: RnPermissionsDTO) {
    this.id = rnPermissionsDTO.id;
    this.controller = rnPermissionsDTO.controller;
    this.actionView = rnPermissionsDTO.actionView;
    this.actionCreate = rnPermissionsDTO.actionCreate;
    this.actionUpdate = rnPermissionsDTO.actionUpdate;
    this.actionDelete = rnPermissionsDTO.actionDelete;
    this.roleId = rnPermissionsDTO.roleId;
    this.createdBy = rnPermissionsDTO.createdBy;
    this.createdAt = rnPermissionsDTO.createdAt;
    this.updatedBy = rnPermissionsDTO.updatedBy;
    this.updatedAt = rnPermissionsDTO.updatedAt;
  }
}
