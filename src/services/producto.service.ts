import { AppDataSource } from "../config/db.config";
import { EstadoAuditoria } from "../enums/estado-auditoria";
import { Producto } from "../entities/producto";

const repository = AppDataSource.getRepository(Producto);

export const insertarProducto = async (data: Partial<Producto>): Promise<Producto> => {
    const newProducto: Producto = await repository.save(data);
    return await repository.findOne({where: { idProducto: newProducto.idProducto }});
}

export const listarProducto = async (): Promise<Producto[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['proveedor', 'categoria']
    });
}

export const obtenerProducto = async (idProducto: number) => {
    return await repository.findOne({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO,idProducto},
        relations: ['proveedor', 'categoria']
    })
}

export const actualizarProducto = async (idProducto: number, data: Partial<Producto>) => {
    await repository.update(idProducto,data);
    return obtenerProducto (idProducto);
}

export const darBajaProducto = async (idProducto: number) => {
    return repository.update(idProducto, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}


