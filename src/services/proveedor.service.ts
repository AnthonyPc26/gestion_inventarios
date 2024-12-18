import { AppDataSource } from "../config/db.config";
import { Proveedor } from "../entities/proveedor";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Proveedor);

export const insertarProveedor = async (data: Partial<Proveedor>): Promise<Proveedor> => {
    const newProveedor: Proveedor = await repository.save(data);
    return await repository.findOne({where: { idProveedor: newProveedor.idProveedor }});
}

export const listarProveedor = async (): Promise<Proveedor[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerProveedor = async (idProveedor: number) => {
    return await repository.findOne({where: {estadoAuditoria: EstadoAuditoria.ACTIVO,idProveedor}})
}

export const actualizarProveedor = async (idProveedor: number, data: Partial<Proveedor>) => {
    await repository.update(idProveedor,data);
    return obtenerProveedor (idProveedor);
}

export const darBajaProveedor = async (idProveedor: number) => {
    return repository.update(idProveedor, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}