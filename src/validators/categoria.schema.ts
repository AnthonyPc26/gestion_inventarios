import Joi from "joi";

// Esquema para insertar una categoría
export const insertarCategoriaSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),

    descripcion: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),
});

// Esquema para actualizar una categoría
export const actualizarCategoriaSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .optional(),

    descripcion: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(),

export const insertarCategoriaSchema = Joi.object({
   
descripcion: Joi.string()
    .min(3)
    .max(200)
    .pattern(/^[a-zA-Z0-9\s]+$/)  // Solo letras, números y espacios
    .required()
});
