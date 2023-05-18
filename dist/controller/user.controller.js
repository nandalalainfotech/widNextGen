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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const User_dto_1 = require("../dto/User.dto");
const User001mb_1 = require("../entity/User001mb");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const role_guard_1 = require("../role/role.guard");
const user_service_1 = require("../service/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create1(userDTO) {
        return this.userService.create(userDTO);
    }
    findAll1() {
        return this.userService.findAll();
    }
    create(userDTO) {
        return this.userService.create(userDTO);
    }
    update(userDTO) {
        return this.userService.update(userDTO);
    }
    updateRole(roleid) {
        return this.userService.updateRole(roleid);
    }
    updateUserTheme(updateTheme) {
        return this.userService.update1(updateTheme);
    }
    updateUserName(userName) {
        return this.userService.updateUserName(userName);
    }
    updatePassword(userDTO) {
        return this.userService.updatePassword(userDTO);
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(personId) {
        return this.userService.findOne(personId);
    }
    remove(id) {
        return this.userService.remove(id);
    }
};
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post("Registersave"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create1", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Get('registerfindAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll1", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post("save"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Put("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Put("updateRole"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateRole", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post("updateUserTheme"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserTheme", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post('updateUserName'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserName", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Post('updatePassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Get('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin, role_enum_1.Role.admin, role_enum_1.Role.user, role_enum_1.Role.guest),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Get(':personId'),
    __param(0, common_1.Param('personId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    role_decorator_1.hasRole(role_enum_1.Role.superadmin),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    common_1.Delete('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = __decorate([
    common_1.Controller('/wdinextgen/api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map