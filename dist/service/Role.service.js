"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Role_dto_1 = require("../dto/Role.dto");
const Role001mb_1 = require("../entity/Role001mb");
const typeorm_2 = require("typeorm");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(roleDTO) {
        const role001mb = new Role001mb_1.Role001mb();
        role001mb.setProperties(roleDTO);
        return this.roleRepository.save(role001mb);
    }
    async update(roleDTO) {
        const role001mb = new Role001mb_1.Role001mb();
        role001mb.setProperties(roleDTO);
        await this.roleRepository.update({ id: role001mb.id }, role001mb);
        return role001mb;
    }
    async findAll() {
        return this.roleRepository.find();
    }
    findOne(id) {
        return this.roleRepository.findOne(id);
    }
    async remove(id) {
        await this.roleRepository.delete(id);
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Role001mb_1.Role001mb)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=Role.service.js.map