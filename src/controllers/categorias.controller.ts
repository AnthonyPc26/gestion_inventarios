import { Request, Response } from 'express';
import * as categoriaService from '../services/categorias.service';

export const insertarCategoria = async (req: Request, res: Response) => {
    const categoria = req.body;
    const response = await categoriaService.insertarCategoria(categoria);
    res.json(response);
};

export const listarCategoria = async (req: Request, res: Response) => {
    const response = await categoriaService.listarCategoria();
    res.json(response);
};

export const obtenerCategoria = async (req: Request, res: Response) => {
    const { idCategoria } = req.params;
    const response = await categoriaService.obtenerCategoria(Number(idCategoria));
    res.json(response);
};

export const actualizarCategoria = async (req: Request, res: Response) => {
    const { idCategoria } = req.params;
    const categoria = req.body;
    const response = await categoriaService.actualizarCategoria(Number(idCategoria), categoria);
    res.json(response);
};

export const darBajaCategoria = async (req: Request, res: Response) => {
    const { idCategoria } = req.params;
    const response = await categoriaService.darBajaCategoria(Number(idCategoria));
    res.json(response);
};
