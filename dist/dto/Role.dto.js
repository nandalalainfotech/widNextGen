"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDTO = void 0;
const Role001mb_1 = require("../entity/Role001mb");
const Base_dto_1 = require("./Base.dto");
class RoleDTO extends Base_dto_1.BaseDTO {
    setProperties(role001mb) {
        this.id = role001mb.id;
        this.rolename = role001mb.rolename;
        this.insertUser = role001mb.insertUser;
        this.insertDatetime = role001mb.insertDatetime;
        this.updatedUser = role001mb.updatedUser;
        this.updatedDatetime = role001mb.updatedDatetime;
    }
}
exports.RoleDTO = RoleDTO;
//# sourceMappingURL=Role.dto.js.map