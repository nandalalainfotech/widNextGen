import { RoleDTO } from 'src/dto/Role.dto';
import { Role001mb } from 'src/entity/Role001mb';
import { RoleService } from 'src/service/Role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(roleDTO: RoleDTO): Promise<Role001mb>;
    update(roleDTO: RoleDTO): Promise<Role001mb>;
    findAll(): Promise<Role001mb[]>;
    findOne(id: number): Promise<Role001mb>;
    remove(id: number): Promise<void>;
}
