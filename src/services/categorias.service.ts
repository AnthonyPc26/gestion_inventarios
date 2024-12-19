import { AppDataSource } from "../config/db.config";
import { Categoria } from "../entities/categorias";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Categoria);

export const insertarCategoria = async (data: Partial<Categoria>): Promise<Categoria> => {
    const newCategoria: Categoria = await repository.save(data);
    return await repository.findOne({where: { idCategoria: newCategoria.idCategoria }});
}

export const listarCategoria = async (): Promise<Categoria[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerCategoria = async (idCategoria: number) => {
    return await repository.findOne({where: {estadoAuditoria: EstadoAuditoria.ACTIVO,idCategoria}})
}

export const actualizarCategoria = async (idCategoria: number, data: Partial<Categoria>) => {
    await repository.update(idCategoria,data);
    return obtenerCategoria (idCategoria);
}

export const darBajaCategoria = async (idCategoria: number) => {
    return repository.update(idCategoria, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}