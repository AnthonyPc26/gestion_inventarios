"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darBajaProveedor = exports.actualizarProveedor = exports.obtenerProveedor = exports.listarProveedor = exports.insertarProveedor = void 0;
const db_config_1 = require("../config/db.config");
const proveedor_1 = require("../entities/proveedor");
const estado_auditoria_1 = require("../enums/estado-auditoria");
const repository = db_config_1.AppDataSource.getRepository(proveedor_1.Proveedor);
const insertarProveedor = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newProveedor = yield repository.save(data);
    return yield repository.findOne({ where: { idProveedor: newProveedor.idProveedor } });
});
exports.insertarProveedor = insertarProveedor;
const listarProveedor = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.find({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO } });
});
exports.listarProveedor = listarProveedor;
const obtenerProveedor = (idProveedor) => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.findOne({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO, idProveedor } });
});
exports.obtenerProveedor = obtenerProveedor;
const actualizarProveedor = (idProveedor, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield repository.update(idProveedor, data);
    return (0, exports.obtenerProveedor)(idProveedor);
});
exports.actualizarProveedor = actualizarProveedor;
const darBajaProveedor = (idProveedor) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.update(idProveedor, { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.INACTIVO });
});
exports.darBajaProveedor = darBajaProveedor;
//# sourceMappingURL=proveedor.service.js.map