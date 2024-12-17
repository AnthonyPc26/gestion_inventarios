import { AppDataSource } from "../config/db.config";

import { Proveedor } from "../entities/proveedor";

const repository = AppDataSource.getRepository(Proveedor);

export const insertarProveedor = async (data: Partial<Proveedor>): Promise<Proveedor> => {
    console.log('insertarProveedor::service',data)
    const newProveedor: Proveedor = await repository.save(data);
    return await repository.findOne({where: { idProveedor: newProveedor.idProveedor }});
}

export const listarProveedor = () => {
    return {accion:'listarProveedor'};
}

export const obtenerProveedor = (idProveedor: number) => {
    return {accion:`obtenerProveedor:${idProveedor}`};
}

export const actualizarProveedor = (idProveedor: number, data: any) => {
    return {accion:`actualizarProveedor:${idProveedor}`};
}

export const darBajaProveedor = (idProveedor: number) => {
    return {accion:`darBajaProveedor:${idProveedor}`};
}