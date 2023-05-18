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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role001mb = void 0;
const Role_dto_1 = require("../dto/Role.dto");
const typeorm_1 = require("typeorm");
const User001mb_1 = require("./User001mb");
let Role001mb = class Role001mb {
    setProperties(roleDTO) {
        this.id = roleDTO.id;
        this.rolename = roleDTO.rolename;
        this.insertUser = roleDTO.insertUser;
        this.insertDatetime = roleDTO.insertDatetime;
        this.updatedUser = roleDTO.updatedUser;
        this.updatedDatetime = roleDTO.updatedDatetime;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Role001mb.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rolename", length: 40 }),
    __metadata("design:type", String)
], Role001mb.prototype, "rolename", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "insert_user", length: 40 }),
    __metadata("design:type", String)
], Role001mb.prototype, "insertUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "insert_datetime" }),
    __metadata("design:type", Date)
], Role001mb.prototype, "insertDatetime", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "updated_user", nullable: true, length: 40 }),
    __metadata("design:type", String)
], Role001mb.prototype, "updatedUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "updated_datetime", nullable: true }),
    __metadata("design:type", Date)
], Role001mb.prototype, "updatedDatetime", void 0);
__decorate([
    typeorm_1.OneToMany(() => User001mb_1.User001mb, (user001mb) => user001mb.role),
    __metadata("design:type", Array)
], Role001mb.prototype, "user001mbs", void 0);
Role001mb = __decorate([
    typeorm_1.Entity("role001mb", { schema: "wdinextgen" })
], Role001mb);
exports.Role001mb = Role001mb;
//# sourceMappingURL=Role001mb.js.map