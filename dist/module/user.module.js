"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("../controller/user.controller");
const User001mb_1 = require("../entity/User001mb");
const role_guard_1 = require("../role/role.guard");
const user_service_1 = require("../service/user.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([User001mb_1.User001mb])],
        providers: [user_service_1.UserService, role_guard_1.RolesGuard],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService,]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map