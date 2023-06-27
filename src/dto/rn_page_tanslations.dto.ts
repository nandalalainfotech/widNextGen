import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { BaseDTO } from "./Base.dto";
import { RnPages } from "src/entity/rn_pages.entity";
import { RnPageTranslations } from "src/entity/rn_page_translations.entity";

export class RnPageTranslationsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: string;

    @ApiModelProperty({})
    pageId: string;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    title: string;

    @ApiModelProperty({})
    slug: string;

    @ApiModelProperty({})
    content: string;

    @ApiModelProperty({})
    metaTitle: string;


    @ApiModelProperty({})
    metaDescription: string;

    @ApiModelProperty({})
    metaKeywords: string;

    setProperties(rnPageTranslations: RnPageTranslations) {
        this.id = rnPageTranslations.id;
        this.pageId = rnPageTranslations.pageId;
        this.locale = rnPageTranslations.locale;
        this.title = rnPageTranslations.title;
        this.slug = rnPageTranslations.slug;
        this.content = rnPageTranslations.content;
        this.metaTitle = rnPageTranslations.metaTitle;
        this.metaDescription = rnPageTranslations.metaDescription;
        this.metaKeywords = rnPageTranslations.metaKeywords;
        this.createdBy = rnPageTranslations.createdBy;
        this.createdAt = rnPageTranslations.createdAt;
        this.updatedBy = rnPageTranslations.updatedBy;
        this.updatedAt = rnPageTranslations.updatedAt;
      }
}