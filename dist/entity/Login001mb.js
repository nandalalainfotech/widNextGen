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
exports.Login001mb = void 0;
const typeorm_1 = require("typeorm");
let Login001mb = class Login001mb {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "loginid" }),
    __metadata("design:type", Number)
], Login001mb.prototype, "loginid", void 0);
__decorate([
    typeorm_1.Column("int", { name: "unitslno" }),
    __metadata("design:type", Number)
], Login001mb.prototype, "unitslno", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "firstname", length: 45 }),
    __metadata("design:type", String)
], Login001mb.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lastname", length: 45 }),
    __metadata("design:type", String)
], Login001mb.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "domain", length: 30 }),
    __metadata("design:type", String)
], Login001mb.prototype, "domain", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "username", length: 45 }),
    __metadata("design:type", String)
], Login001mb.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password", length: 60 }),
    __metadata("design:type", String)
], Login001mb.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "enabled", default: () => "'1'" }),
    __metadata("design:type", Number)
], Login001mb.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "securityanswer", length: 45 }),
    __metadata("design:type", String)
], Login001mb.prototype, "securityanswer", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "message", nullable: true, length: 200 }),
    __metadata("design:type", String)
], Login001mb.prototype, "message", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "securityquestion", length: 100 }),
    __metadata("design:type", String)
], Login001mb.prototype, "securityquestion", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", length: 45 }),
    __metadata("design:type", String)
], Login001mb.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "insert_user", length: 40 }),
    __metadata("design:type", String)
], Login001mb.prototype, "insertUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "insert_datetime" }),
    __metadata("design:type", Date)
], Login001mb.prototype, "insertDatetime", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "updated_user", nullable: true, length: 40 }),
    __metadata("design:type", String)
], Login001mb.prototype, "updatedUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "updated_datetime", nullable: true }),
    __metadata("design:type", Date)
], Login001mb.prototype, "updatedDatetime", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "theme",
        nullable: true,
        length: 10,
        default: () => "'#286090'",
    }),
    __metadata("design:type", String)
], Login001mb.prototype, "theme", void 0);
Login001mb = __decorate([
    typeorm_1.Entity("login001mb", { schema: "wdinextgen" })
], Login001mb);
exports.Login001mb = Login001mb;
//# sourceMappingURL=Login001mb.js.map