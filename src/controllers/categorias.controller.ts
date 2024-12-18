import { Request, Response } from 'express';
import * as categoriaService from '../services/categorias.service';
import { Categoria } from '../entities/categorias';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';

export const insertarCategoria = async (req: Request, res: Response) => {
    try {
        console.log('insertarCategoria')
        console.log('req.body', req.body)
        const categoria: Partial<Categoria> = req.body;
        const newCategoria: Categoria = await categoriaService.insertarCategoria(categoria);
        res.json(BaseResponse.success(newCategoria, message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarCategoria = async (req: Request, res: Response) => {
    try {
        console.log('listarCategoria');
        const categorias: Categoria[] = await categoriaService.listarCategoria();
        res.json(BaseResponse.success(categorias));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        const response = await categoriaService.obtenerCategoria(Number(idCategoria));
        res.json(BaseResponse.success(response));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        const categoria = req.body;
        const response = await categoriaService.actualizarCategoria(Number(idCategoria),categoria)
        res.json(BaseResponse.success(response, message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        const response = await categoriaService.darBajaCategoria(Number(idCategoria));
        res.json(BaseResponse.success(response, message.ELIMINADO_OK));
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};