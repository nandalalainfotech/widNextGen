import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { RnRoles } from "./rn_roles.entity";
import { RnPageTranslationsDTO } from "src/dto/rn_page_tanslations.dto";
 
  
  @Index("role_id", ["roleId"], {})
  @Entity("rn_page_translations", { schema: "wdinext" })
  export class RnPageTranslations {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;
  
    @Column("bigint", { name: "page_id", unsigned: true })
    pageId: string;
  
    @Column("varchar", { name: "locale", length: 255 })
    locale: string;
  
    @Column("int", { name: "role_id" })
    roleId: number;
  
    @Column("varchar", { name: "title", length: 120 })
    title: string;
  
    @Column("varchar", { name: "slug", length: 120 })
    slug: string;
  
    @Column("text", { name: "content" })
    content: string;
  
    @Column("varchar", { name: "seo_title", length: 120 })
    seoTitle: string;
  
    @Column("varchar", { name: "meta_description", length: 120 })
    metaDescription: string;
  
    @Column("varchar", { name: "meta_keywords", length: 120 })
    metaKeywords: string;
  
    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;
  
    @Column("datetime", { name: "insert_datetime", nullable: true })
    insertDatetime: Date | null;
  
    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;
  
    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;
  
    @ManyToOne(() => RnRoles, (rnRoles) => rnRoles.rnPageTranslations, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
    role: RnRoles;

        
    setProperties(rnPageTranslationsDTO: RnPageTranslationsDTO) {
        this.id = rnPageTranslationsDTO.id;
        this.roleId = rnPageTranslationsDTO.roleId;
        this.pageId = rnPageTranslationsDTO.pageId;
        this.locale = rnPageTranslationsDTO.locale;
        this.title = rnPageTranslationsDTO.title;
        this.slug = rnPageTranslationsDTO.slug;
        this.content = rnPageTranslationsDTO.content;
        this.seoTitle = rnPageTranslationsDTO.seoTitle;
        this.metaDescription = rnPageTranslationsDTO.metaDescription;
        this.metaKeywords = rnPageTranslationsDTO.metaKeywords;
        this.insertUser = rnPageTranslationsDTO.insertUser;
        this.insertDatetime = rnPageTranslationsDTO.insertDatetime;
        this.updatedUser = rnPageTranslationsDTO.updatedUser;
        this.updatedDatetime = rnPageTranslationsDTO.updatedDatetime;
      }

    }