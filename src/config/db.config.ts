import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";
import { Proveedor } from "../entities/proveedor";
import { Categoria } from '../entities/categoria'; // Asegúrate de que la ruta sea correcta
import { Rol } from '../entities/rol';
import { Producto } from "../entities/producto";
import { Usuario } from "../entities/usuario";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Proveedor, Categoria, Rol, Producto, Usuario],
});