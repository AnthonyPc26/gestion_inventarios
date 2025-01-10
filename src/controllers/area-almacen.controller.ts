import { Request, Response } from 'express';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { AreaAlmacen } from '../entities/area-almacen';
import * as areaAlmacenService from '../services/area-almacen.service';
import { actualizarAreaAlmacenSchema, insertarAreaAlmacenSchema } from '../validators/area-almacen.schema';

export const insertarAreaAlmacen = async (req: Request, res: Response) => {
    try {
        console.log('insertarAreaAlmacen');
        const { error } = insertarAreaAlmacenSchema.validate(req.body); // Validación del esquema
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const areaAlmacen: Partial<AreaAlmacen> = req.body;
        const newAreaAlmacen: AreaAlmacen = await areaAlmacenService.insertarAreaAlmacen(areaAlmacen);
        res.json(BaseResponse.success(newAreaAlmacen, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarAreaAlmacen = async (req: Request, res: Response) => {
    try {
        console.log('listarAreaAlmacen');
        const areasAlmacen: AreaAlmacen[] = await areaAlmacenService.listarAreaAlmacen();
        res.json(BaseResponse.success(areasAlmacen));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerAreaAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAreaAlmacen } = req.params;
        const areaAlmacen: AreaAlmacen | null = await areaAlmacenService.obtenerAreaAlmacen(Number(idAreaAlmacen));
        if (!areaAlmacen) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(areaAlmacen));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarAreaAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAreaAlmacen } = req.params;

        const { error } = actualizarAreaAlmacenSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const areaAlmacenExistente = await areaAlmacenService.obtenerAreaAlmacen(Number(idAreaAlmacen));
        if (!areaAlmacenExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        const areaAlmacen: Partial<AreaAlmacen> = req.body;
        const updatedAreaAlmacen: AreaAlmacen = await areaAlmacenService.actualizarAreaAlmacen(Number(idAreaAlmacen), areaAlmacen);

        res.json(BaseResponse.success(updatedAreaAlmacen, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaAreaAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAreaAlmacen } = req.params;

        const areaAlmacenExistente = await areaAlmacenService.obtenerAreaAlmacen(Number(idAreaAlmacen));
        if (!areaAlmacenExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        await areaAlmacenService.darBajaAreaAlmacen(Number(idAreaAlmacen));

        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};