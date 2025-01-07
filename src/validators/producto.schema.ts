import Joi from 'joi';

export const insertarProductoSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .required(),
    descripcion: Joi.string()
        .min(3) 
        .max(1000)
        .required(),
    precio: Joi.number()
        .positive()
        .precision(2)
        .required(),
    stock: Joi.number()
        .integer()
        .min(0)
        .required(),
    id_proveedor: Joi.number()
        .integer()
        .min(1)
        .required(), // Validamos que sea un número entero mayor a 0
    id_categoria: Joi.number()
        .integer()
        .min(1)
        .required(), // Lo mismo para id_categoria
});
