import { Router, } from "express";
import { insertarProducto, listarProducto, obtenerProducto, actualizarProducto, darBajaProducto } from "../controllers/producto.controller";

const router: Router = Router();

router.post('/',insertarProducto);
router.get('/',listarProducto);
router.get('/:idProducto',obtenerProducto);
router.put('/:idProducto',actualizarProducto);
router.delete('/:idProducto',darBajaProducto);

export default router;