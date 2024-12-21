import { Router } from "express";
import { actualizarCategoria, insertarCategoria, listarCategoria, obtenerCategoria,  darBajaCategoria } from "../controllers/categoria.controller";

const router: Router = Router();

// Rutas para la entidad categorías
router.post('/', insertarCategoria); // Crear una categoría
router.get('/', listarCategoria); // Listar todas las categorías
router.get('/:idCategoria', obtenerCategoria); // Obtener una categoría por ID
router.put('/:idCategoria', actualizarCategoria); // Actualizar una categoría
router.delete('/:idCategoria', darBajaCategoria); // Dar de baja una categoría

export default router;
