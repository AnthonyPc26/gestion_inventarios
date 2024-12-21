"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provedor_controller_1 = require("../controllers/provedor.controller");
const router = (0, express_1.Router)();
router.post('/', provedor_controller_1.insertarProveedor);
router.get('/', provedor_controller_1.listarProveedor);
router.get('/:idProveedor', provedor_controller_1.obtenerProveedor);
router.put('/:idProveedor', provedor_controller_1.actualizarProveedor);
router.delete('/:idProveedor', provedor_controller_1.darBajaProveedor);
exports.default = router;
//# sourceMappingURL=proveedor.route.js.map