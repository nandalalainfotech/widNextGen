import { SetMetadata } from '@nestjs/common';
import { Role001mbs } from './role001mbs.enum';


export const ROLES_KEY = 'roles';
export const hasRole = (...roles: Role001mbs[]) => SetMetadata(ROLES_KEY, roles);