import { RoleDTO } from 'src/dto/Role.dto';
import { Role001mb } from 'src/entity/Role001mb';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role001mb>);
    create(roleDTO: RoleDTO): Promise<Role001mb>;
    update(roleDTO: RoleDTO): Promise<Role001mb>;
    findAll(): Promise<Role001mb[]>;
    findOne(id: number): Promise<Role001mb>;
    remove(id: number): Promise<void>;
}
