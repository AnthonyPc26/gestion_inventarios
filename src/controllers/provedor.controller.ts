import { Request, Response } from 'express';
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';


export const insertarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('insertarProveedor')
        console.log('req.body',req.body)
        const proveedor: Partial<Proveedor> = req.body;
        const newProveedor: Proveedor = await proveedorService.insertarProveedor(proveedor)
        res.json(BaseResponse.success(newProveedor, message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('listarProveedor');
        const proveedores: Proveedor[] = await proveedorService.listarProveedor();
        res.json(BaseResponse.success(proveedores));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerProveedor = async (req: Request, res: Response) => {
    try {
        const { idProveedor } = req.params;
        const response = await proveedorService.obtenerProveedor(Number(idProveedor));
        res.json(BaseResponse.success(response));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarProveedor = async (req: Request, res: Response) => {
    try {
        const { idProveedor } = req.params;
        const proveedor = req.body;
        const response = await proveedorService.actualizarProveedor(Number(idProveedor),proveedor)
        res.json(BaseResponse.success(response, message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaProveedor = async (req: Request, res: Response) => {
    try {
        const { idProveedor } = req.params;
        await proveedorService.darBajaProveedor(Number(idProveedor));
        res.json(BaseResponse.success(null,message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}