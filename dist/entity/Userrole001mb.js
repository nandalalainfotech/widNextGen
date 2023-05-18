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
exports.Userrole001mb = void 0;
const typeorm_1 = require("typeorm");
let Userrole001mb = class Userrole001mb {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "userroleid" }),
    __metadata("design:type", Number)
], Userrole001mb.prototype, "userroleid", void 0);
__decorate([
    typeorm_1.Column("int", { name: "unitslno" }),
    __metadata("design:type", Number)
], Userrole001mb.prototype, "unitslno", void 0);
__decorate([
    typeorm_1.Column("int", { name: "loginid" }),
    __metadata("design:type", Number)
], Userrole001mb.prototype, "loginid", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "role", length: 45 }),
    __metadata("design:type", String)
], Userrole001mb.prototype, "role", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "username", length: 45 }),
    __metadata("design:type", String)
], Userrole001mb.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "insert_user", length: 40 }),
    __metadata("design:type", String)
], Userrole001mb.prototype, "insertUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "insert_datetime" }),
    __metadata("design:type", Date)
], Userrole001mb.prototype, "insertDatetime", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "updated_user", nullable: true, length: 40 }),
    __metadata("design:type", String)
], Userrole001mb.prototype, "updatedUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "updated_datetime", nullable: true }),
    __metadata("design:type", Date)
], Userrole001mb.prototype, "updatedDatetime", void 0);
Userrole001mb = __decorate([
    typeorm_1.Entity("userrole001mb", { schema: "wdinextgen" })
], Userrole001mb);
exports.Userrole001mb = Userrole001mb;
//# sourceMappingURL=Userrole001mb.js.map