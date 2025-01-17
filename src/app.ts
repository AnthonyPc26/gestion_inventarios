import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import proveedorRouter from './routes/proveedor.route';
import { AppDataSource } from './config/db.config';
import categoriaRouter from './routes/categoria.route';
import rolesRouter from './routes/rol.route';
import productoRouter from './routes/produto.route';
import usuarioRouter from './routes/usuario.route';
import almacenRouter from './routes/almacen.route';
import areaAlmacenRouter from './routes/area-almacen.route';
import ubicacionProductoRouter from './routes/ubicacion-producto.route';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/proveedores',proveedorRouter);
app.use('/api/v1/categorias', categoriaRouter);
app.use('/api/v1/categorias', categoriaRouter);    
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/productos', productoRouter);
app.use('/api/v1/usuarios',usuarioRouter);
app.use('/api/v1/almacenes', almacenRouter);
app.use('/api/v1/areas-almacen', areaAlmacenRouter);
app.use('/api/v1/ubicaciones-producto', ubicacionProductoRouter);


export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;