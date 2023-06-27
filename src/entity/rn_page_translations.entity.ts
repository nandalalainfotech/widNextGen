import { RnPageTranslationsDTO } from "src/dto/rn_page_tanslations.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rn_page_translations", { schema: "wdinext" })
export class RnPageTranslations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "page_id", unsigned: true })
  pageId: string;

  @Column("varchar", { name: "locale", length: 2 })
  locale: string;

  @Column("varchar", { name: "title", length: 250 })
  title: string;

  @Column("varchar", { name: "slug", length: 250 })
  slug: string;

  @Column("text", { name: "content" })
  content: string;

  @Column("varchar", { name: "meta_title", length: 120 })
  metaTitle: string;

  @Column("varchar", { name: "meta_description", length: 250 })
  metaDescription: string;

  @Column("varchar", { name: "meta_keywords", length: 250 })
  metaKeywords: string;

  @Column("bigint", { name: "created_by", nullable: true, unsigned: true })
  createdBy: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("bigint", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

        
    setProperties(rnPageTranslationsDTO: RnPageTranslationsDTO) {
        this.id = rnPageTranslationsDTO.id;
        this.pageId = rnPageTranslationsDTO.pageId;
        this.locale = rnPageTranslationsDTO.locale;
        this.title = rnPageTranslationsDTO.title;
        this.slug = rnPageTranslationsDTO.slug;
        this.content = rnPageTranslationsDTO.content;
        this.metaTitle = rnPageTranslationsDTO.metaTitle;
        this.metaDescription = rnPageTranslationsDTO.metaDescription;
        this.metaKeywords = rnPageTranslationsDTO.metaKeywords;
        this.createdBy = rnPageTranslationsDTO.createdBy;
        this.createdAt = rnPageTranslationsDTO.createdAt;
        this.updatedBy = rnPageTranslationsDTO.updatedBy;
        this.updatedAt = rnPageTranslationsDTO.updatedAt;
      }

    }