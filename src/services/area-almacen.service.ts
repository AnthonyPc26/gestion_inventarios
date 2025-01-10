import { AppDataSource } from "../config/db.config";
import { EstadoAuditoria } from "../enums/estado-auditoria";
import { AreaAlmacen } from "../entities/area-almacen";

const repository = AppDataSource.getRepository(AreaAlmacen);

export const insertarAreaAlmacen = async (data: Partial<AreaAlmacen>): Promise<AreaAlmacen> => {
    const newAreaAlmacen: AreaAlmacen = await repository.save(data);
    return await repository.findOne({
        where: { idAreaAlmacen: newAreaAlmacen.idAreaAlmacen },
        relations: ['almacen', 'ubicacionesProducto', 'ubicacionesProducto.producto']
    });
}

export const listarAreaAlmacen = async (): Promise<AreaAlmacen[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['almacen', 'ubicacionesProducto', 'ubicacionesProducto.producto']
    });
}

export const obtenerAreaAlmacen = async (idAreaAlmacen: number): Promise<AreaAlmacen | null> => {
    return await repository.findOne({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idAreaAlmacen },
        relations: ['almacen', 'ubicacionesProducto', 'ubicacionesProducto.producto']
    });
}

export const actualizarAreaAlmacen = async (idAreaAlmacen: number, data: Partial<AreaAlmacen>): Promise<AreaAlmacen | null> => {
    await repository.update(idAreaAlmacen, data);
    return obtenerAreaAlmacen(idAreaAlmacen);
}

export const darBajaAreaAlmacen = async (idAreaAlmacen: number): Promise<void> => {
    await repository.update(idAreaAlmacen, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}