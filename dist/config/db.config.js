"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../shared/constants");
const proveedor_1 = require("../entities/proveedor");
const categoria_1 = require("../entities/categoria"); // Asegúrate de que la ruta sea correcta
const rol_1 = require("../entities/rol");
exports.AppDataSource = new typeorm_1.DataSource({
    type: constants_1.DB_TYPE,
    host: constants_1.DB_HOST,
    port: Number(constants_1.DB_PORT || '0'),
    username: constants_1.DB_USERNAME,
    password: constants_1.DB_PASSWORD,
    database: constants_1.DB_DATABASE,
    entities: [proveedor_1.Proveedor, categoria_1.Categoria, rol_1.Rol],
});
//# sourceMappingURL=db.config.js.map