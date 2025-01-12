import { AppDataSource } from "../config/db.config";
import { EstadoAuditoria } from "../enums/estado-auditoria";
import { Almacen } from "../entities/almacen";

const repository = AppDataSource.getRepository(Almacen);

export const insertarAlmacen = async (data: Partial<Almacen>): Promise<Almacen> => {
    const newAlmacen: Almacen = await repository.save(data);
    return await repository.findOne({
        where: { idAlmacen: newAlmacen.idAlmacen },
        relations: ['encargadoAlmacen', 'areasAlmacen']
    });
}

export const listarAlmacen = async (): Promise<Almacen[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['encargadoAlmacen', 'areasAlmacen']
    });
}

export const obtenerAlmacen = async (idAlmacen: number): Promise<Almacen | null> => {
    return await repository.findOne({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idAlmacen },
        relations: ['encargadoAlmacen', 'areasAlmacen']
    });
}

export const actualizarAlmacen = async (idAlmacen: number, data: Partial<Almacen>): Promise<Almacen | null> => {
    await repository.update(idAlmacen, data);
    return obtenerAlmacen(idAlmacen);
}

export const darBajaAlmacen = async (idAlmacen: number): Promise<void> => {
    await repository.update(idAlmacen, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}