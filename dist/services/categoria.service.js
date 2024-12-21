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
exports.darBajaCategoria = exports.actualizarCategoria = exports.obtenerCategoria = exports.listarCategoria = exports.insertarCategoria = void 0;
const db_config_1 = require("../config/db.config");
const categoria_1 = require("../entities/categoria");
const estado_auditoria_1 = require("../enums/estado-auditoria");
const repository = db_config_1.AppDataSource.getRepository(categoria_1.Categoria);
const insertarCategoria = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategoria = yield repository.save(data);
    return yield repository.findOne({ where: { idCategoria: newCategoria.idCategoria } });
});
exports.insertarCategoria = insertarCategoria;
const listarCategoria = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.find({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO } });
});
exports.listarCategoria = listarCategoria;
const obtenerCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.findOne({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO, idCategoria } });
});
exports.obtenerCategoria = obtenerCategoria;
const actualizarCategoria = (idCategoria, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield repository.update(idCategoria, data);
    return (0, exports.obtenerCategoria)(idCategoria);
});
exports.actualizarCategoria = actualizarCategoria;
const darBajaCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.update(idCategoria, { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.INACTIVO });
});
exports.darBajaCategoria = darBajaCategoria;
//# sourceMappingURL=categoria.service.js.map