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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const Role_dto_1 = require("../dto/Role.dto");
const Role001mb_1 = require("../entity/Role001mb");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const role_guard_1 = require("../role/role.guard");
const Role_service_1 = require("../service/Role.service");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(roleDTO) {
        return this.roleService.create(roleDTO);
    }
    update(roleDTO) {
        return this.roleService.update(roleDTO);
    }
    findAll() {
        return this.roleService.findAll();
    }
    findOne(id) {
        return this.roleService.findOne(id);
    }
    remove(id) {
        return this.roleService.remove(id);
    }
};
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post("save"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Role_dto_1.RoleDTO]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Put("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Role_dto_1.RoleDTO]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Get('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findAll", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Delete('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "remove", null);
RoleController = __decorate([
    common_1.Controller('/testandreportstudio/api/role'),
    __metadata("design:paramtypes", [Role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=Role.controller.js.map