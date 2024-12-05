export const insertarCategoria = (data: any) => {
    return { accion: 'insertarCategoria' };
};

export const listarCategoria = () => {
    return { accion: 'listarCategoria' };
};

export const obtenerCategoria = (idCategoria: number) => {
    return { accion: `obtenerCategoria:${idCategoria}` };
};

export const actualizarCategoria = (idCategoria: number, data: any) => {
    return { accion: `actualizarCategoria:${idCategoria}` };
};

export const darBajaCategoria = (idCategoria: number) => {
    return { accion: `darBajaCategoria:${idCategoria}` };
};
