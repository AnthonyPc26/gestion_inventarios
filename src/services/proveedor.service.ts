export const insertarProveedor = (data: any) => {
    return {accion:'insertarProveedor'};
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