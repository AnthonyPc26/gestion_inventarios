import { Router } from "express";
import {
  listarAlmacen,
  obtenerAlmacen,
  insertarAlmacen,
  actualizarAlmacen,
  darBajaAlmacen,
} from "../controllers/almacen.controller";

const almacenRouter: Router = Router();

almacenRouter.post("/", insertarAlmacen); 
almacenRouter.get("/", listarAlmacen); 
almacenRouter.get("/:idAlmacen", obtenerAlmacen); 
almacenRouter.put("/:idAlmacen", actualizarAlmacen); 
almacenRouter.delete("/:idAlmacen", darBajaAlmacen); 

export default almacenRouter;