"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const hasRole = (...roles) => common_1.SetMetadata(exports.ROLES_KEY, roles);
exports.hasRole = hasRole;
//# sourceMappingURL=role.decorator.js.map