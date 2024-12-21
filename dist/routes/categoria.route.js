"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = (0, express_1.Router)();
// Rutas para la entidad categorías
router.post('/', categoria_controller_1.insertarCategoria); // Crear una categoría
router.get('/', categoria_controller_1.listarCategoria); // Listar todas las categorías
router.get('/:idCategoria', categoria_controller_1.obtenerCategoria); // Obtener una categoría por ID
router.put('/:idCategoria', categoria_controller_1.actualizarCategoria); // Actualizar una categoría
router.delete('/:idCategoria', categoria_controller_1.darBajaCategoria); // Dar de baja una categoría
exports.default = router;
//# sourceMappingURL=categoria.route.js.map