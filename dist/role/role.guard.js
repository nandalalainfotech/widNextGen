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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const User001mb_1 = require("../entity/User001mb");
const typeorm_2 = require("typeorm");
const role_decorator_1 = require("./role.decorator");
const role_enum_1 = require("./role.enum");
let RolesGuard = class RolesGuard {
    constructor(userRepository, reflector) {
        this.userRepository = userRepository;
        this.reflector = reflector;
    }
    canActivate(context) {
        const roles = this.reflector.getAllAndOverride(role_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!roles) {
            return true;
        }
        const user = context.switchToHttp().getRequest();
        if (user && user.user && user.user.username) {
            return this.userRepository.find({ relations: ['role'], where: { username: user.user.username, } }).then((users) => {
                let user001mb = users[0];
                const hasRole = () => roles.indexOf(role_enum_1.Role[user001mb.role.rolename]) > -1;
                let hasPermission = false;
                if (hasRole()) {
                    hasPermission = true;
                }
                ;
                return hasRole && hasPermission;
            });
        }
        else {
            return false;
        }
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(User001mb_1.User001mb)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=role.guard.js.map