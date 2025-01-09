import { Request, Response } from 'express';
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';
import { BaseResponse } from '../shared/base-response';
import { message } from '../enums/message';
import { actualizarProveedorSchema, insertarProveedorSchema } from '../validators/proveedor.schema';

export const insertarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('insertarProveedor');
        const { error } = insertarProveedorSchema.validate(req.body);
        if(error){
            res.status(400).json(BaseResponse.error(error.message,400));
            return;
        }
        const proveedor: Partial<Proveedor> = req.body;
        const newProveedor: Proveedor = await proveedorService.insertarProveedor(proveedor)
        res.json(BaseResponse.success(newProveedor, message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
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
        const proveedor: Proveedor = await proveedorService.obtenerProveedor(Number(idProveedor));
        if(!proveedor) {
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(proveedor));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarProveedor = async (req: Request, res: Response) => {
    try {
        const { idProveedor } = req.params;
        const { error } = actualizarProveedorSchema.validate(req.body);
        if(error){
            res.status(400).json(BaseResponse.error(error.message,400));
            return;
        }
        const proveedor: Partial<Proveedor> = req.body;
        if(!(await proveedorService.obtenerProveedor(Number(idProveedor)))){
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        const updateProveedor: Proveedor = await proveedorService.actualizarProveedor(Number(idProveedor),proveedor);
        res.json(BaseResponse.success(updateProveedor, message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaProveedor = async (req: Request, res: Response) => {
    try {
        const { idProveedor } = req.params;
        if(!(await proveedorService.obtenerProveedor(Number(idProveedor)))){
            res.status(404).json(BaseResponse.error(message.NOT_FOUND,404));
            return;
        }
        await proveedorService.darBajaProveedor(Number(idProveedor));
        res.json(BaseResponse.success(null,message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}