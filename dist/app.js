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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const proveedor_route_1 = __importDefault(require("./routes/proveedor.route"));
const db_config_1 = require("./config/db.config");
const categoria_route_1 = __importDefault(require("./routes/categoria.route")); // Asegúrate de que la ruta sea correcta
const rol_route_1 = __importDefault(require("./routes/rol.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/api/v1/proveedores', proveedor_route_1.default);
app.use('/api/v1/categorias', categoria_route_1.default); // Ruta para categorías
app.use('/api/v1/roles', rol_route_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_config_1.AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    }
    catch (error) {
        console.error('Error al conectar con la base de datos', error);
    }
});
exports.startServer = startServer;
exports.default = app;
//# sourceMappingURL=app.js.map