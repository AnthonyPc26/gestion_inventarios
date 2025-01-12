import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as usuarioService from "../services/usuario.service";
import { Usuario } from "../entities/usuario";
import { message } from "../enums/message";
import { actualizarUsuarioSchema, insertarUsuarioSchema } from "../validators/usuario.schema";

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        console.log('insertarUsuario');

        // Validación del esquema
        const { error } = insertarUsuarioSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        const usuario: Partial<Usuario> = req.body;
        const newUsuario: Usuario = await usuarioService.insertarUsuario(usuario);

        res.json(BaseResponse.success(newUsuario, message.INSERTADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        console.log('listarUsuarios');
        const usuarios: Usuario[] = await usuarioService.listarUsuarios();
        res.json(BaseResponse.success(usuarios));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        const usuario: Usuario | null = await usuarioService.obtenerUsuario(Number(idUsuario));
        if (!usuario) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(usuario));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;

        // Validación del cuerpo con el esquema
        const { error } = actualizarUsuarioSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }

        // Verificar si el usuario existe en la base de datos
        const usuarioExistente = await usuarioService.obtenerUsuario(Number(idUsuario));
        if (!usuarioExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Actualizar el usuario en la base de datos
        const usuario: Partial<Usuario> = req.body;
        const updatedUsuario: Usuario = await usuarioService.actualizarUsuario(Number(idUsuario), usuario);

        // Responder con el usuario actualizado
        res.json(BaseResponse.success(updatedUsuario, message.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;

        // Verificar si el usuario existe en la base de datos
        const usuarioExistente = await usuarioService.obtenerUsuario(Number(idUsuario));
        if (!usuarioExistente) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND, 404));
            return;
        }

        // Dar de baja al usuario
        await usuarioService.darBajaUsuario(Number(idUsuario));

        // Responder con éxito
        res.json(BaseResponse.success(null, message.ELIMINADO_OK));
    } catch (error: any) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};