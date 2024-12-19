import { Request, Response } from 'express';
import * as categoriaService from '../services/categorias.service';
import { Categoria } from '../entities/categorias';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';

export const insertarCategoria = async (req: Request, res: Response) => {
    try {
        console.log('insertarCategoria');
        const categoria: Partial<Categoria> = req.body;
        const newCategoria: Categoria = await categoriaService.insertarCategoria(categoria)
        res.json(BaseResponse.success(newCategoria, message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
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
        const categoria: Categoria = await categoriaService.obtenerCategoria(Number(idCategoria));
        if(!categoria) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(categoria));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        const categoria: Partial<Categoria> = req.body;
        if(!(await categoriaService.obtenerCategoria(Number(idCategoria)))){
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        const updateCategoria: Categoria = await categoriaService.actualizarCategoria(Number(idCategoria),categoria);
        res.json(BaseResponse.success(updateCategoria, message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const darBajaCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        if(!(await categoriaService.obtenerCategoria(Number(idCategoria)))){
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        await categoriaService.darBajaCategoria(Number(idCategoria));
        res.json(BaseResponse.success(null,message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}