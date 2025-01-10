import { Request, Response } from 'express';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { Producto } from '../entities/producto';
import * as productoService from '../services/producto.service';
import { actualizarProductoSchema, insertarProductoSchema } from '../validators/producto.schema';

export const insertarProducto = async (req: Request, res: Response) => {
    try {
        console.log('insertarProducto');
        const { error } = insertarProductoSchema.validate(req.body); // Validación del esquema
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const producto: Partial<Producto> = req.body;
        const newProducto: Producto = await productoService.insertarProducto(producto);
        res.json(BaseResponse.success(newProducto, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarProducto = async (req: Request, res: Response) => {
    try {
        console.log('listarProducto');
        const productos: Producto[] = await productoService.listarProducto();
        res.json(BaseResponse.success(productos));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerProducto = async (req: Request, res: Response) => {
    try {
        const { idProducto } = req.params;
        const producto: Producto | null = await productoService.obtenerProducto(Number(idProducto));
        if (!producto) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(producto));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarProducto = async (req: Request, res: Response) => {
    try {
        const { idProducto } = req.params;

        // Validación del cuerpo con el esquema
        const { error } = actualizarProductoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        // Verificar si el producto existe en la base de datos
        const productoExistente = await productoService.obtenerProducto(Number(idProducto));
        if (!productoExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Actualizar el producto en la base de datos
        const producto: Partial<Producto> = req.body;
        const updatedProducto: Producto = await productoService.actualizarProducto(Number(idProducto), producto);

        // Responder con el producto actualizado
        res.json(BaseResponse.success(updatedProducto, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaProducto = async (req: Request, res: Response) => {
    try {
        const { idProducto } = req.params;

        // Verificar si el producto existe en la base de datos
        const productoExistente = await productoService.obtenerProducto(Number(idProducto));
        if (!productoExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Dar de baja el producto
        await productoService.darBajaProducto(Number(idProducto));

        // Responder con éxito
        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};