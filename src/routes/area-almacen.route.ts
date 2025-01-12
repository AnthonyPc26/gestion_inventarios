import { Router } from "express";

import {
    listarAreaAlmacen,
    obtenerAreaAlmacen,
    insertarAreaAlmacen,
    actualizarAreaAlmacen,
    darBajaAreaAlmacen,
  } from "../controllers/area-almacen.controller";
  
  const areaAlmacenRouter: Router = Router();
  
  areaAlmacenRouter.post("/", insertarAreaAlmacen); 
  areaAlmacenRouter.get("/", listarAreaAlmacen); 
  areaAlmacenRouter.get("/:idAreaAlmacen", obtenerAreaAlmacen); 
  areaAlmacenRouter.put("/:idAreaAlmacen", actualizarAreaAlmacen); 
  areaAlmacenRouter.delete("/:idAreaAlmacen", darBajaAreaAlmacen);

  export default areaAlmacenRouter;