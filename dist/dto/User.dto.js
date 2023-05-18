"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const Role001mb_1 = require("../entity/Role001mb");
const User001mb_1 = require("../entity/User001mb");
class UserDTO {
    setProperties(user001mb) {
        this.personId = user001mb.personId;
        this.firstname = user001mb.firstname;
        this.lastname = user001mb.lastname;
        this.username = user001mb.username;
        this.roleid = user001mb.roleid;
        this.password = user001mb.password;
        this.status = user001mb.status;
        this.email = user001mb.email;
        this.securityquestion = user001mb.securityquestion;
        this.securityanswer = user001mb.securityanswer;
        this.theme = user001mb.theme;
        this.insertUser = user001mb.insertUser;
        this.insertDatetime = user001mb.insertDatetime;
        this.updatedUser = user001mb.updatedUser;
        this.updatedDatetime = user001mb.updatedDatetime;
        this.role = user001mb.role;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=User.dto.js.map