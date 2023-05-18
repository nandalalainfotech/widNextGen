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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const User_dto_1 = require("../dto/User.dto");
const Role001mb_1 = require("../entity/Role001mb");
const User001mb_1 = require("../entity/User001mb");
const mail_service_1 = require("../mail/mail.service");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(mailService, userRepository) {
        this.mailService = mailService;
        this.userRepository = userRepository;
        this.saltRounds = 10;
    }
    async create(userDTO) {
        let users = [];
        users = await this.userRepository.find({ relations: ["role"] });
        for (let i = 0; i < users.length; i++) {
            if (userDTO.username.toLowerCase() == users[i].username.toLowerCase()) {
                throw new common_1.HttpException('User Name Already Exist', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        const user001mb = new User001mb_1.User001mb();
        user001mb.setProperties(userDTO);
        user001mb.password = "erpnext001";
        const hash = await bcrypt.hash(user001mb.password, this.saltRounds);
        user001mb.password = hash;
        await this.userRepository.save(user001mb);
        await this.mailService.sendUserConfirmation(user001mb);
        return user001mb;
    }
    async updateRole(userDTO) {
        const user001mb = await this.userRepository.findOne({ relations: ["role"], where: { personId: userDTO.personId } });
        user001mb.roleid = userDTO.roleid;
        let role001mb = new Role001mb_1.Role001mb();
        role001mb.id = userDTO.roleid;
        user001mb.role = role001mb;
        return this.userRepository.save(user001mb);
    }
    async update(userDTO) {
        const user001mb = new User001mb_1.User001mb();
        user001mb.firstname = userDTO.firstname;
        user001mb.lastname = userDTO.lastname;
        user001mb.username = userDTO.username;
        user001mb.roleid = userDTO.roleid;
        user001mb.status = userDTO.status;
        user001mb.email = userDTO.email;
        user001mb.securityquestion = userDTO.securityquestion;
        user001mb.securityanswer = userDTO.securityanswer;
        user001mb.updatedUser = userDTO.updatedUser;
        user001mb.updatedDatetime = userDTO.updatedDatetime;
        user001mb.updatedUser = userDTO.updatedUser;
        user001mb.updatedDatetime = userDTO.updatedDatetime;
        await this.userRepository.update({ personId: userDTO.personId }, user001mb);
        return user001mb;
    }
    async updatePassword(userDTO) {
        const hash = await bcrypt.hash(userDTO.password, this.saltRounds);
        userDTO.password = hash;
        const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
        user001mb.password = userDTO.password;
        user001mb.status = "A";
        return this.userRepository.save(user001mb);
    }
    async updateUserName(user) {
        const user001mb = await this.userRepository.findOne({ where: { personId: user.personId } });
        user001mb.username = user.username;
        return this.userRepository.save(user001mb);
    }
    async update1(updateTheme) {
        const user001mb = await this.userRepository.findOne({ where: { personId: updateTheme.personId } });
        user001mb.theme = updateTheme.theme;
        return this.userRepository.save(user001mb);
    }
    async findAll() {
        return this.userRepository.find({ relations: ["role"] });
    }
    findOne(personId) {
        return this.userRepository.findOne(personId);
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(User001mb_1.User001mb)),
    __metadata("design:paramtypes", [mail_service_1.MailService,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map