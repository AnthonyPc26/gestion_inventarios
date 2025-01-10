import Joi from 'joi';

// Esquema para insertar un producto
export const insertarProductoSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(), // El nombre debe ser obligatorio al insertar
    descripcion: Joi.string()
        .min(3)
        .max(1000)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(), // La descripción también es requerida al insertar
    precio: Joi.number()
        .positive()
        .precision(2)
        .required(), // Precio requerido, positivo, con 2 decimales
    id_proveedor: Joi.number()
        .integer()
        .min(1)
        .required(), // Validamos que sea un número entero mayor a 0
    id_categoria: Joi.number()
        .integer()
        .min(1)
        .required(), // Lo mismo para id_categoria
});

// Esquema para actualizar un producto
export const actualizarProductoSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .optional(), // Nombre opcional en actualización
    descripcion: Joi.string()
        .min(3)
        .max(1000)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s.,]+$/) 
        .optional(), // Descripción opcional en actualización
    precio: Joi.number()
        .positive()
        .precision(2)
        .optional(), // Precio opcional en actualización
    id_proveedor: Joi.number()
        .integer()
        .min(1)
        .optional(), // Opcional para permitir actualizaciones parciales
    id_categoria: Joi.number()
        .integer()
        .min(1)
        .optional(), // Opcional también
});
