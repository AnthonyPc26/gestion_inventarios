import { AppDataSource } from "../config/db.config";
import { EstadoAuditoria } from "../enums/estado-auditoria";
import { UbicacionProducto } from "../entities/ubicacion-producto";

const repository = AppDataSource.getRepository(UbicacionProducto);

export const insertarUbicacionProducto = async (data: Partial<UbicacionProducto>): Promise<UbicacionProducto> => {
    const newUbicacionProducto: UbicacionProducto = await repository.save(data);
    return await repository.findOne({
        where: { idUbicacionProducto: newUbicacionProducto.idUbicacionProducto },
        relations: ['areaAlmacen', 'producto']
    });
}

export const listarUbicacionProducto = async (): Promise<UbicacionProducto[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['areaAlmacen', 'producto']
    });
}

export const obtenerUbicacionProducto = async (idUbicacionProducto: number): Promise<UbicacionProducto | null> => {
    return await repository.findOne({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idUbicacionProducto },
        relations: ['areaAlmacen', 'producto']
    });
}

export const actualizarUbicacionProducto = async (idUbicacionProducto: number, data: Partial<UbicacionProducto>): Promise<UbicacionProducto | null> => {
    await repository.update(idUbicacionProducto, data);
    return obtenerUbicacionProducto(idUbicacionProducto);
}

export const darBajaUbicacionProducto = async (idUbicacionProducto: number): Promise<void> => {
    await repository.update(idUbicacionProducto, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}