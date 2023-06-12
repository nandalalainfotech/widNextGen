import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Repository } from "typeorm";
import { Users001mb } from "src/entity/Users001mb";
import { Role001mbs } from "./role001mbs.enum";
import { ROLES_KEY } from "./role001mbs.decorator";



@Injectable()
export class Role001mbsGuard implements CanActivate {
    constructor(@InjectRepository(Users001mb) private readonly usersRepository: Repository<Users001mb>,
        private reflector: Reflector) { }


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.getAllAndOverride<Role001mbs[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if (!roles) {
            return true;
        }

        const user = context.switchToHttp().getRequest();
      
        
        if (user && user.user && user.user.username) {
            return this.usersRepository.find({ relations: ['role001mbs.roleId.rolename'],  where: { username: user.user.username, } }).then((users: Users001mb[]) => {
                let users001mb: Users001mb = users[0];

                
                const hasRole = () => roles.indexOf(Role001mbs[users001mb.roleId]) > -1;
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