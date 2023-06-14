
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { Role001mb } from "src/entity/Role001mb";
import { Users001mb } from "src/entity/Users001mb";



export class UserDTO  {
  
    userId: number;

    @ApiModelProperty({})
    firstname: string;

    @ApiModelProperty({})
    lastname: string;

    @ApiModelProperty({})
    username: string;

    // @ApiModelProperty({})
    roleId: number;

    @ApiModelProperty({type : Number , isArray: true})
    rolesId: number[];
   
    // @ApiModelProperty({})
    groupId: number;

    @ApiModelProperty({type : Number , isArray: true})
    groupsId: number[];

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

    role001mbs?: Role001mb[];

    setProperties(users001mb: Users001mb) {
        this.userId = users001mb.userId;
        this.firstname = users001mb.firstname;
        this.lastname = users001mb.lastname;
        this.username = users001mb.username;
        this.roleId = users001mb.roleId;
        this.groupId = users001mb.groupId;
        this.password = users001mb.password;
        this.status = users001mb.status;
        this.email = users001mb.email;
        // this.avatar = users001mb.avatar;
        this.insertUser = users001mb.insertUser;
        this.insertDatetime = users001mb.insertDatetime;
        this.updatedUser = users001mb.updatedUser;
        this.updatedDatetime = users001mb.updatedDatetime;
       
     
    }
}
