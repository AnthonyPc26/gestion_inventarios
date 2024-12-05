import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import proveedorRouter from './routes/proveedor.route';
import categoriasRouter from './routes/categorias.route';

const app: Application = express();



app.use(morgan('dev'));
app.use('/api/v1/proveedores',proveedorRouter)
app.use('/api/v1/categorias',categoriasRouter)

export default app;



