import { Request, Response } from 'express';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { Almacen } from '../entities/almacen';
import * as almacenService from '../services/almacen.service';
import { insertarAlmacenSchema, actualizarAlmacenSchema } from '../validators/almacen.schema';

export const insertarAlmacen = async (req: Request, res: Response) => {
    try {
        const { error } = insertarAlmacenSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const almacen: Partial<Almacen> = req.body;
        const newAlmacen: Almacen = await almacenService.insertarAlmacen(almacen);
        res.json(BaseResponse.success(newAlmacen, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarAlmacen = async (req: Request, res: Response) => {
    try {
        const almacenes: Almacen[] = await almacenService.listarAlmacen();
        res.json(BaseResponse.success(almacenes));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAlmacen } = req.params;
        const almacen: Almacen | null = await almacenService.obtenerAlmacen(Number(idAlmacen));
        if (!almacen) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(almacen));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAlmacen } = req.params;

        const { error } = actualizarAlmacenSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const almacenExistente = await almacenService.obtenerAlmacen(Number(idAlmacen));
        if (!almacenExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        const almacen: Partial<Almacen> = req.body;
        const updatedAlmacen: Almacen = await almacenService.actualizarAlmacen(Number(idAlmacen), almacen);
        res.json(BaseResponse.success(updatedAlmacen, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaAlmacen = async (req: Request, res: Response) => {
    try {
        const { idAlmacen } = req.params;

        const almacenExistente = await almacenService.obtenerAlmacen(Number(idAlmacen));
        if (!almacenExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        await almacenService.darBajaAlmacen(Number(idAlmacen));
        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
