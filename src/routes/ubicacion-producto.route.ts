import { Router } from "express";

import {
    listarUbicacionProducto,
    obtenerUbicacionProducto,
    insertarUbicacionProducto,
    actualizarUbicacionProducto,
    darBajaUbicacionProducto,
  } from "../controllers/ubicacion-producto.controller";
  
  const ubicacionProductoRouter: Router = Router();
  
  ubicacionProductoRouter.post("/", insertarUbicacionProducto); 
  ubicacionProductoRouter.get("/", listarUbicacionProducto); 
  ubicacionProductoRouter.get("/:idUbicacionProducto", obtenerUbicacionProducto); 
  ubicacionProductoRouter.put("/:idUbicacionProducto", actualizarUbicacionProducto); 
  ubicacionProductoRouter.delete("/:idUbicacionProducto", darBajaUbicacionProducto); 
  
  export default ubicacionProductoRouter;