import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";
import { Proveedor } from "../entities/proveedor";
import { Categoria } from '../entities/categoria';
import { Rol } from '../entities/rol';
import { Producto } from "../entities/producto";
import { Usuario } from "../entities/usuario";
import { Almacen } from "../entities/almacen";
import { AreaAlmacen } from "../entities/area-almacen";
import { UbicacionProducto } from "../entities/ubicacion-producto";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT || '0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [
        Proveedor,
        Categoria,
        Rol,
        Producto,
        Usuario,
        Almacen,
        AreaAlmacen,
        UbicacionProducto
    ],
});