import Joi from 'joi';

export const insertarUbicacionProductoSchema = Joi.object({
    producto: Joi.number()
        .integer()
        .min(1)
        .required(),
    areaAlmacen: Joi.number()
        .integer()
        .min(1)
        .required(),
    cantidad: Joi.number()
        .integer()
        .min(0)
        .required(),
});

export const actualizarUbicacionProductoSchema = Joi.object({
    idAreaAlmacen: Joi.number()
        .integer()
        .min(1)
        .optional(),
    idProducto: Joi.number()
        .integer()
        .min(1)
        .optional(),
    cantidad: Joi.number()
        .integer()
        .min(0)
        .optional(),
});