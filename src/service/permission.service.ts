import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionDTO } from 'src/dto/permission.dto';
import { Permission001mb } from 'src/entity/Permission001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {

    constructor(@InjectRepository(Permission001mb) private readonly permissionRepository: Repository<Permission001mb>,
        @InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>
    ) { }


    async create(permissionDTO: PermissionDTO): Promise<Permission001mb> {
        let permissions: Permission001mb[] = [];
        permissions = await this.permissionRepository.find({ relations: ["role001mbs"] });
        for (let i = 0; i < permissions.length; i++) {
            if (permissionDTO.name.toLowerCase() == permissions[i].name.toLowerCase()) {
                throw new HttpException('Permission Name Already Exist', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        let role = await this.roleRepository.findOne({ where: { roleId: permissionDTO.prmsnId } });
        const permission001mb = new Permission001mb();
        permission001mb.setProperties(permissionDTO);
        permission001mb.role001mbs = [role];
        await this.permissionRepository.save(permission001mb);
        return permission001mb;
    }

    async updateRole(permissionDTO: PermissionDTO): Promise<Permission001mb> {
        const permission001mb = await this.permissionRepository.findOne({ relations: ["role001mbs"], where: { prmsnId: permissionDTO.prmsnId } });
        permission001mb.prmsnId = permissionDTO.prmsnId;
        let role001mb = new Role001mb();
        role001mb.roleId = permissionDTO.prmsnId;
        // users001mb.role = role001mb;


        return this.permissionRepository.save(permission001mb);
    }


    async update(permissionDTO: PermissionDTO): Promise<Permission001mb> {
        const permission001mb = new Permission001mb();
        permission001mb.name = permissionDTO.name;
        permission001mb.updatedUser = permissionDTO.updatedUser;
        permission001mb.updatedDatetime = permissionDTO.updatedDatetime;
        permission001mb.updatedUser = permissionDTO.updatedUser;
        permission001mb.updatedDatetime = permissionDTO.updatedDatetime;

        await this.permissionRepository.update({ prmsnId: permissionDTO.prmsnId }, permission001mb);
        return permission001mb;

    }

    async findAll(): Promise<Permission001mb[]> {
        return this.permissionRepository.find({ relations: ["role001mbs"] });
    }

    
	async findOne(prmsnId: number): Promise<Permission001mb> {
		return this.permissionRepository.findOne(prmsnId);
	}

    async remove(id: number): Promise<void> {
        await this.permissionRepository.delete(id);
       
    }

}