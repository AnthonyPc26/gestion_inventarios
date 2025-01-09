import Joi from "joi";

export const insertarCategoriaSchema = Joi.object({
   
descripcion: Joi.string()
    .min(3)
    .max(200)
    .pattern(/^[a-zA-Z0-9\s]+$/)  // Solo letras, números y espacios
    .required()
});
