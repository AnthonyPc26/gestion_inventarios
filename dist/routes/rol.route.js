"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = require("../controllers/rol.controller");
const router = (0, express_1.Router)();
// Rutas para la entidad Roles
router.post('/', rol_controller_1.insertarRol);
router.get('/', rol_controller_1.listarRol);
router.get('/:idRol', rol_controller_1.obtenerRol);
router.put('/:idRol', rol_controller_1.actualizarRol);
router.delete('/:idRol', rol_controller_1.darBajaRol);
exports.default = router;
//# sourceMappingURL=rol.route.js.map