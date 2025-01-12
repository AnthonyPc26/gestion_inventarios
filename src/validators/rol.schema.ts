import Joi from 'joi';

export const insertarRolSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),
    descripcion: Joi.string()
        .min(3)
        .max(1000)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .required(),
});


export const actualizarRolSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),
    descripcion: Joi.string()
        .min(3)
        .max(1000)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .required(),
});
