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
exports.Mark = void 0;
const typeorm_1 = require("typeorm");
const Student_1 = require("./Student");
const Subject_1 = require("./Subject");
let Mark = class Mark extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', {
        generatedIdentity: 'ALWAYS'
    }),
    __metadata("design:type", Number)
], Mark.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Mark.prototype, "mark", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Subject_1.Subject, subject => subject.marks, {
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Subject_1.Subject)
], Mark.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Student_1.Student, student => student.marks, {
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Student_1.Student)
], Mark.prototype, "student", void 0);
Mark = __decorate([
    (0, typeorm_1.Entity)()
], Mark);
exports.Mark = Mark;
