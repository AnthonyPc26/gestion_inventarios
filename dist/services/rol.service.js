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
exports.darBajaRol = exports.actualizarRol = exports.obtenerRol = exports.listarRol = exports.insertarRol = void 0;
const db_config_1 = require("../config/db.config");
const rol_1 = require("../entities/rol");
const estado_auditoria_1 = require("../enums/estado-auditoria");
const repository = db_config_1.AppDataSource.getRepository(rol_1.Rol);
const insertarRol = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newRol = yield repository.save(data);
    return yield repository.findOne({ where: { idRol: newRol.idRol } });
});
exports.insertarRol = insertarRol;
const listarRol = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.find({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO } });
});
exports.listarRol = listarRol;
const obtenerRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.findOne({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO, idRol } });
});
exports.obtenerRol = obtenerRol;
const actualizarRol = (idRol, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield repository.update(idRol, data);
    return (0, exports.obtenerRol)(idRol);
});
exports.actualizarRol = actualizarRol;
const darBajaRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.update(idRol, { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.INACTIVO });
});
exports.darBajaRol = darBajaRol;
//# sourceMappingURL=rol.service.js.map