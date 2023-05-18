import { Role } from './role.enum';
export declare const ROLES_KEY = "roles";
export declare const hasRole: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
