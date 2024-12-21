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
exports.Proveedor = void 0;
const typeorm_1 = require("typeorm");
const producto_1 = require("./producto");
let Proveedor = class Proveedor {
};
exports.Proveedor = Proveedor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proveedor' }),
    __metadata("design:type", Number)
], Proveedor.prototype, "idProveedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'razon_social' }),
    __metadata("design:type", String)
], Proveedor.prototype, "razonSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_documento' }),
    __metadata("design:type", String)
], Proveedor.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_documento' }),
    __metadata("design:type", String)
], Proveedor.prototype, "numeroDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefono' }),
    __metadata("design:type", String)
], Proveedor.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo' }),
    __metadata("design:type", String)
], Proveedor.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'direccion' }),
    __metadata("design:type", String)
], Proveedor.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria' }),
    __metadata("design:type", String)
], Proveedor.prototype, "estadoAuditoria", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion_auditoria' }),
    __metadata("design:type", Date)
], Proveedor.prototype, "fechaCreacionAuditoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => producto_1.Producto, (producto) => producto.proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "productos", void 0);
exports.Proveedor = Proveedor = __decorate([
    (0, typeorm_1.Entity)('proveedores')
], Proveedor);
//# sourceMappingURL=proveedor.js.map