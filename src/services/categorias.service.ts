import { AppDataSource } from "../config/db.config";
import { Categoria } from "../entities/categorias";

const repository = AppDataSource.getRepository(Categoria);

export const insertarCategoria = async (data: Partial<Categoria>): Promise<Categoria> => {
    console.log('insertarCategoria::service', data)
    const newCategoria: Categoria = await repository.save(data);
    return await repository.findOne({ where: { idCategoria: newCategoria.idCategoria } });
}

export const listarCategoria = async () => {
    return { accion: 'listarCategoria' };
}

export const obtenerCategoria = async (idCategoria: number) => {
    return { accion: `obtenerCategoria:${idCategoria}` };
}

export const actualizarCategoria = async (idCategoria: number, data: any) => {
    return { accion: `actualizarCategoria:${idCategoria}` };
}

export const darBajaCategoria = async (idCategoria: number) => {
    return { accion: `darBajaCategoria:${idCategoria}` };
}
