import { Request, Response } from 'express';
import * as rolService from '../services/rol.service';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { Rol } from '../entities/rol';
import { actualizarRolSchema, insertarRolSchema } from '../validators/rol.schema';

export const insertarRol = async (req: Request, res: Response) => {
    try {
        console.log('insertarRol');

        // Validación del esquema
        const { error } = insertarRolSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const rol: Partial<Rol> = req.body; 
        const newRol: Rol = await rolService.insertarRol(rol); 

        res.json(BaseResponse.success(newRol, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarRol = async (req: Request, res: Response) => {
    try {
        console.log('listarRol');
        const roles: Rol[] = await rolService.listarRol();
        res.json(BaseResponse.success(roles));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerRol = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        const rol: Rol | null = await rolService.obtenerRol(Number(idRol));
        if (!rol) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(rol));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarRol = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;

        // Validación del cuerpo con el esquema
        const { error } = actualizarRolSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        // Verificar si el rol existe en la base de datos
        const rolExistente = await rolService.obtenerRol(Number(idRol));
        if (!rolExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Actualizar el rol en la base de datos
        const rol: Partial<Rol> = req.body;
        const updatedRol: Rol = await rolService.actualizarRol(Number(idRol), rol);

        // Responder con el rol actualizado
        res.json(BaseResponse.success(updatedRol, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaRol = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;

        // Verificar si el rol existe en la base de datos
        const rolExistente = await rolService.obtenerRol(Number(idRol));
        if (!rolExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Dar de baja el rol
        await rolService.darBajaRol(Number(idRol));

        // Responder con éxito
        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};