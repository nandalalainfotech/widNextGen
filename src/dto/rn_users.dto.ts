
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { RnUsers } from "src/entity/rn_users";




export class RnUsersDTO  {
  
    userId: number;

    @ApiModelProperty({})
    firstname: string;

    @ApiModelProperty({})
    lastname: string;

    @ApiModelProperty({})
    username: string;

    @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({})
    password: string;

    @ApiModelProperty({})
    status: string;

    @ApiModelProperty({})
    email: string;

    @ApiModelProperty({})
    mobileNo: string | null;

    // @ApiModelProperty({})
    // avatar: Buffer | null;

    @ApiModelProperty({})
    insertUser: string;

    @ApiModelProperty({})
    insertDatetime: Date | null;
    
    updatedUser: string | null;
    updatedDatetime: Date | null;


    setProperties(rnUsers: RnUsers) {
        this.userId = rnUsers.userId;
        this.firstname = rnUsers.firstname;
        this.lastname = rnUsers.lastname;
        this.username = rnUsers.username;
        this.roleId = rnUsers.roleId;
        this.password = rnUsers.password;
        this.status = rnUsers.status;
        this.email = rnUsers.email;
        this.mobileNo = rnUsers.mobileNo;
        // this.avatar = rnUsers.avatar;
        this.insertUser = rnUsers.insertUser;
        this.insertDatetime = rnUsers.insertDatetime;
        this.updatedUser = rnUsers.updatedUser;
        this.updatedDatetime = rnUsers.updatedDatetime;
       
     
    }
}
