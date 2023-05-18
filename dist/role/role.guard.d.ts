import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { User001mb } from "src/entity/User001mb";
import { Repository } from "typeorm";
export declare class RolesGuard implements CanActivate {
    private readonly userRepository;
    private reflector;
    constructor(userRepository: Repository<User001mb>, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
