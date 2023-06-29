
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";
import { RnUsers } from "src/entity/rn_users.entity";
import { BaseDTO } from "./Base.dto";




export class Users extends BaseDTO {

    id: string;

    @IsNotEmpty()
    @ApiModelProperty({})
    firstName: string;

    @ApiModelProperty({})
    lastName: string;

    @ApiModelProperty({})
    username: string;

    @ApiModelProperty({})
    roleId: string;

    @IsEmail()
    @ApiModelProperty({})
    email: string;

    @IsNotEmpty()
    @ApiModelProperty({})
    password: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty({})
    status: number;


    // @IsString()
    // @IsNotEmpty()
    // @Matches(/^\+[1-9]\d{1,14}$/)
    @ApiModelProperty({})
    mobile: string | null;

    @ApiModelProperty({})
    avatar: string | null;


    setProperties(rnUsers: RnUsers) {
        this.id = rnUsers.id;
        this.roleId = rnUsers.roleId;
        this.firstName = rnUsers.firstName;
        this.lastName = rnUsers.lastName;
        this.username = rnUsers.username;
        this.password = rnUsers.password;
        this.mobile = rnUsers.mobile;
        this.status = rnUsers.status;
        this.email = rnUsers.email;
        this.avatar = rnUsers.avatar;
        this.createdBy = rnUsers.createdBy;
        this.createdAt = rnUsers.createdAt;
        this.updatedBy = rnUsers.updatedBy;
        this.updatedAt = rnUsers.updatedAt;


    }
}


