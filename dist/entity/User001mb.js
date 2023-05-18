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
exports.User001mb = void 0;
const typeorm_1 = require("typeorm");
const Role001mb_1 = require("./Role001mb");
const User_dto_1 = require("../dto/User.dto");
let User001mb = class User001mb {
    setProperties(userDTO) {
        this.personId = userDTO.personId;
        this.firstname = userDTO.firstname;
        this.lastname = userDTO.lastname;
        this.username = userDTO.username;
        this.roleid = userDTO.roleid;
        this.password = userDTO.password;
        this.status = userDTO.status;
        this.email = userDTO.email;
        this.securityquestion = userDTO.securityquestion;
        this.securityanswer = userDTO.securityanswer;
        this.theme = userDTO.theme;
        this.insertUser = userDTO.insertUser;
        this.insertDatetime = userDTO.insertDatetime;
        this.updatedUser = userDTO.updatedUser;
        this.updatedDatetime = userDTO.updatedDatetime;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "person_id" }),
    __metadata("design:type", Number)
], User001mb.prototype, "personId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "roleid" }),
    __metadata("design:type", Number)
], User001mb.prototype, "roleid", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "firstname", length: 45 }),
    __metadata("design:type", String)
], User001mb.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lastname", length: 45 }),
    __metadata("design:type", String)
], User001mb.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "username", length: 40 }),
    __metadata("design:type", String)
], User001mb.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password", length: 100 }),
    __metadata("design:type", String)
], User001mb.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("char", { name: "status", length: 1 }),
    __metadata("design:type", String)
], User001mb.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "email", length: 30 }),
    __metadata("design:type", String)
], User001mb.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "securityquestion", length: 250 }),
    __metadata("design:type", String)
], User001mb.prototype, "securityquestion", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "securityanswer", length: 250 }),
    __metadata("design:type", String)
], User001mb.prototype, "securityanswer", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "theme",
        nullable: true,
        length: 10,
        default: () => "'#286090'",
    }),
    __metadata("design:type", String)
], User001mb.prototype, "theme", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "insert_user", length: 40 }),
    __metadata("design:type", String)
], User001mb.prototype, "insertUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "insert_datetime" }),
    __metadata("design:type", Date)
], User001mb.prototype, "insertDatetime", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "updated_user", nullable: true, length: 40 }),
    __metadata("design:type", String)
], User001mb.prototype, "updatedUser", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "updated_datetime", nullable: true }),
    __metadata("design:type", Date)
], User001mb.prototype, "updatedDatetime", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Role001mb_1.Role001mb, (role001mb) => role001mb.user001mbs, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    typeorm_1.JoinColumn([{ name: "roleid", referencedColumnName: "id" }]),
    __metadata("design:type", Role001mb_1.Role001mb)
], User001mb.prototype, "role", void 0);
User001mb = __decorate([
    typeorm_1.Index("roleid", ["roleid"], {}),
    typeorm_1.Entity("user001mb", { schema: "wdinextgen" })
], User001mb);
exports.User001mb = User001mb;
//# sourceMappingURL=User001mb.js.map