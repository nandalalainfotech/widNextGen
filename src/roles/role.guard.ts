import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { RnUsers } from "src/entity/rn_users.entity";
import { Repository } from "typeorm";
import { ROLES_KEY } from "./role.decorator";
import { Role } from "./role.enum";




@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@InjectRepository(RnUsers) private readonly rnUserRepository: Repository<RnUsers>,
    private reflector: Reflector) { }


  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])


    const user = context.switchToHttp().getRequest();



    if (user && user.user && user.user.username) {
      return this.rnUserRepository.find({ relations: ['role'], where: { username: user.user.username, } }).then((users: RnUsers[]) => {
        let rnUsers: RnUsers = users[0];

        const hasRole = () => roles.indexOf(Role[rnUsers.role.name]) > -1;
        let hasPermission: boolean = false;


        if (hasRole()) {

          hasPermission = true;
        };
        return hasRole && hasPermission;

      });
    }
    else {
      return false
    }




  }


}