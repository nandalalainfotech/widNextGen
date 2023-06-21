import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { BaseDTO } from "./Base.dto";
import { RnPages } from "src/entity/rn_pages";
import { RnPageTranslations } from "src/entity/rn_page_translations";

export class RnPageTranslationsDTO extends BaseDTO {
    @ApiModelProperty({})
    id: number;

    @ApiModelProperty({})
    pageId: string;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    locale: string;

    @ApiModelProperty({})
    title: string;

    @ApiModelProperty({})
    slug: string;

    @ApiModelProperty({})
    content: string;

    @ApiModelProperty({})
    seoTitle: string;


    @ApiModelProperty({})
    metaDescription: string;

    @ApiModelProperty({})
    metaKeywords: string;

    setProperties(rnPageTranslations: RnPageTranslations) {
        this.id = rnPageTranslations.id;
        this.roleId = rnPageTranslations.roleId;
        this.pageId = rnPageTranslations.pageId;
        this.locale = rnPageTranslations.locale;
        this.title = rnPageTranslations.title;
        this.slug = rnPageTranslations.slug;
        this.content = rnPageTranslations.content;
        this.seoTitle = rnPageTranslations.seoTitle;
        this.metaDescription = rnPageTranslations.metaDescription;
        this.metaKeywords = rnPageTranslations.metaKeywords;
        this.insertUser = rnPageTranslations.insertUser;
        this.insertDatetime = rnPageTranslations.insertDatetime;
        this.updatedUser = rnPageTranslations.updatedUser;
        this.updatedDatetime = rnPageTranslations.updatedDatetime;
      }
}