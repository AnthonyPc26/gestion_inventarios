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
exports.Rol = void 0;
const typeorm_1 = require("typeorm");
let Rol = class Rol {
};
exports.Rol = Rol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rol' }),
    __metadata("design:type", Number)
], Rol.prototype, "idRol", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre' }),
    __metadata("design:type", String)
], Rol.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descripcion' }),
    __metadata("design:type", String)
], Rol.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria' }),
    __metadata("design:type", String)
], Rol.prototype, "estadoAuditoria", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion_auditoria' }),
    __metadata("design:type", Date)
], Rol.prototype, "fechaCreacionAuditoria", void 0);
exports.Rol = Rol = __decorate([
    (0, typeorm_1.Entity)('roles')
], Rol);
//# sourceMappingURL=rol.js.map