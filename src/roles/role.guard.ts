import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { RnUsers } from "src/entity/rn_users";
import { Repository } from "typeorm";
import { ROLES_KEY } from "./role.decorator";
import { Role } from "./role.enum";




@Injectable()
export class RolesGuard implements CanActivate {
    constructor(@InjectRepository(RnUsers) private readonly rnUserRepository: Repository<RnUsers>,
        private reflector: Reflector) { }


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      console.log("Role====000",Role);
        const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])


        const user = context.switchToHttp().getRequest();

  
        
        if (user && user.user && user.user.username) {
          console.log("user =====>02", user );
            return this.rnUserRepository.find({ relations: ['role'],  where: { username: user.user.username, } }).then((users: RnUsers[]) => {
              console.log("users =====>03", users ); 
              let rnUsers: RnUsers = users[0];
              const rolePermissions = {
                superadmin: {
                   users: {
                     view: true,
                     create: true,
                     update: true,
                     delete: true,
                   },
                   posts: {
                     view: true,
                     create: true,
                     update: true,
                     delete: true,
                   }
                 },
                 admin: {
                  users: {
                    view: false,
                    create: false,
                    update: false,
                    delete: false,
                  },
                  posts: {
                    view: false,
                    create: false,
                    update: false,
                    delete: false,
                  }
                },
                 user: {
                   users: {
                     view: false,
                     create: false,
                     update: false,
                     delete: false,
                   },
                   posts: {
                     view: false,
                     create: false,
                     update: false,
                     delete: false,
                   }
                 },
                 guest: {
                   users: {
                     view: false,
                     create: false,
                     update: false,
                     delete: false,
                   },
                   posts: {
                     view: false,
                     create: false,
                     update: false,
                     delete: false,
                   }
                  }
                }
              console.log("hasRole====01",  roles.indexOf(Role[rnUsers.role.rolename]));
                const hasRole = () => roles.indexOf(Role[rnUsers.role.rolename]) > -1;
                let hasPermission: boolean = false;

                
                if (hasRole()) {

                           
                       hasPermission = true;
                      //  if(rnUsers.role.rolename == 'guest'){
                      //   hasPermission = rolePermissions.guest.users.view;
                      //   hasPermission = rolePermissions.guest.users.create;
                      //   hasPermission = rolePermissions.guest.users.update;
                      //   hasPermission = rolePermissions.guest.users.delete;
                      //  }
                      //  hasRole(): rolePermissions.superadmin || rolePermissions.admin || rolePermissions.guest || rolePermissions.user;  
                };
                return hasRole && hasPermission;
     
            });
        }
        else {
            return false
        }
    

   

}


}