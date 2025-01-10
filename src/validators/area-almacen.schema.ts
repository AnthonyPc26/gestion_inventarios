import Joi from 'joi';

export const insertarAreaAlmacenSchema = Joi.object({
    almacen: Joi.number()
        .integer()
        .min(1)
        .required(),
    nombreArea: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),
    descripcion: Joi.string()
        .min(3)
        .max(500)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),
    nivelEstanteria: Joi.number()
        .integer()
        .min(0)
        .optional(),
    pasillo: Joi.number()
        .integer()
        .min(0)
        .optional(),
    superficieArea: Joi.number()
        .positive()
        .optional(),
});

export const actualizarAreaAlmacenSchema = Joi.object({
    almacen: Joi.number()
        .integer()
        .min(1)
        .optional(),
    nombreArea: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .optional(),
    descripcion: Joi.string()
        .min(3)
        .max(500)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),
    nivelEstanteria: Joi.number()
        .integer()
        .min(0)
        .optional(),
    pasillo: Joi.number()
        .integer()
        .min(0)
        .optional(),
    superficieArea: Joi.number()
        .positive()
        .optional(),
});