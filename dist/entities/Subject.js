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
exports.Subject = void 0;
const typeorm_1 = require("typeorm");
const EnumStatus_1 = require("../utils/EnumStatus");
const Mark_1 = require("./Mark");
let Subject = class Subject extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        generatedIdentity: 'ALWAYS'
    }),
    __metadata("design:type", Number)
], Subject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true
    }),
    __metadata("design:type", String)
], Subject.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Subject.prototype, "credits", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int"
    }),
    __metadata("design:type", Number)
], Subject.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: EnumStatus_1.Status,
        default: 'active'
    }),
    __metadata("design:type", String)
], Subject.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mark_1.Mark, mark => mark.subject, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], Subject.prototype, "marks", void 0);
Subject = __decorate([
    (0, typeorm_1.Entity)()
], Subject);
exports.Subject = Subject;
