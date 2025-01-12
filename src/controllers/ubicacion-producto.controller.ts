import { Request, Response } from 'express';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { UbicacionProducto } from '../entities/ubicacion-producto';
import * as ubicacionProductoService from '../services/ubicacion-producto.service';
import { actualizarUbicacionProductoSchema, insertarUbicacionProductoSchema } from '../validators/ubicacion-producto.schema';

export const insertarUbicacionProducto = async (req: Request, res: Response) => {
    try {
        console.log('insertarUbicacionProducto');
        const { error } = insertarUbicacionProductoSchema.validate(req.body); // Validación del esquema
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const ubicacionProducto: Partial<UbicacionProducto> = req.body;
        const newUbicacionProducto: UbicacionProducto = await ubicacionProductoService.insertarUbicacionProducto(ubicacionProducto);
        res.json(BaseResponse.success(newUbicacionProducto, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarUbicacionProducto = async (req: Request, res: Response) => {
    try {
        console.log('listarUbicacionProducto');
        const ubicacionesProducto: UbicacionProducto[] = await ubicacionProductoService.listarUbicacionProducto();
        res.json(BaseResponse.success(ubicacionesProducto));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerUbicacionProducto = async (req: Request, res: Response) => {
    try {
        const { idUbicacionProducto } = req.params;
        const ubicacionProducto: UbicacionProducto | null = await ubicacionProductoService.obtenerUbicacionProducto(Number(idUbicacionProducto));
        if (!ubicacionProducto) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(ubicacionProducto));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarUbicacionProducto = async (req: Request, res: Response) => {
    try {
        const { idUbicacionProducto } = req.params;

        const { error } = actualizarUbicacionProductoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const ubicacionProductoExistente = await ubicacionProductoService.obtenerUbicacionProducto(Number(idUbicacionProducto));
        if (!ubicacionProductoExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        const ubicacionProducto: Partial<UbicacionProducto> = req.body;
        const updatedUbicacionProducto: UbicacionProducto = await ubicacionProductoService.actualizarUbicacionProducto(Number(idUbicacionProducto), ubicacionProducto);

        res.json(BaseResponse.success(updatedUbicacionProducto, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaUbicacionProducto = async (req: Request, res: Response) => {
    try {
        const { idUbicacionProducto } = req.params;

        const ubicacionProductoExistente = await ubicacionProductoService.obtenerUbicacionProducto(Number(idUbicacionProducto));
        if (!ubicacionProductoExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        await ubicacionProductoService.darBajaUbicacionProducto(Number(idUbicacionProducto));

        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};