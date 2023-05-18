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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const operators_1 = require("rxjs/operators");
const User001mb_1 = require("../../entity/User001mb");
const User_dto_1 = require("../../dto/User.dto");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    generateJwt(username, status, securityquestion, securityanswer, role) {
        const payload = {
            username: username, status: status, securityquestion: securityquestion, securityanswer: securityanswer, role: role
        };
        return rxjs_1.from(this.jwtService.signAsync(payload));
    }
    async getUserAuthentication(username, password) {
        console.log("username,password==>23", username, password);
        const user001mb = await this.userRepository.findOne({ relations: ['role'], where: { username: username } });
        let userDTO = new User_dto_1.UserDTO();
        if (user001mb) {
            const isMatch = await bcrypt.compare(username, user001mb.username);
            if (user001mb) {
                userDTO.setProperties(user001mb);
                userDTO.password = null;
                return this.generateJwt(user001mb.username, user001mb.status, user001mb.securityquestion, user001mb.securityanswer, user001mb.role.rolename).pipe(operators_1.map((jwt) => {
                    return { userDTO, access_token: jwt };
                }));
            }
        }
        else {
            throw new common_1.HttpException('Invalid Username', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(User001mb_1.User001mb)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map