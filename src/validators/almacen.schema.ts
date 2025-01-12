import Joi from 'joi';

export const insertarAlmacenSchema = Joi.object({
    nombreAlmacen: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),
    direccion: Joi.string()
        .min(3)
        .max(500)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),
    superficie: Joi.number()
        .positive()
        .optional(),
    encargadoAlmacen: Joi.number()
        .integer()
        .min(1)
        .optional(),
    latitud: Joi.number()
        .precision(8)
        .optional(),
    longitud: Joi.number()
        .precision(8)
        .optional(),
    imagenUrl: Joi.string()
        .uri()
        .optional(),
});

export const actualizarAlmacenSchema = Joi.object({
    nombreAlmacen: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .optional(),
    direccion: Joi.string()
        .min(3)
        .max(500)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),
    superficie: Joi.number()
        .positive()
        .optional(),
    encargadoAlmacen: Joi.number()
        .integer()
        .min(1)
        .optional(),
    latitud: Joi.number()
        .precision(8)
        .optional(),
    longitud: Joi.number()
        .precision(8)
        .optional(),
    imagenUrl: Joi.string()
        .uri()
        .optional(),
});