import Joi from "joi";

export const insertarUsuarioSchema = Joi.object({
    nombreUsuario: Joi.string()
        .min(3)
        .max(200)
        .pattern(/^[a-zA-ZÀ-ÿ0-9\s]+$/)
        .required(),
    password: Joi.string()
        .min(6)
        .max(200)
        .required(),
    telefono: Joi.string()
        .min(9)
        .max(20)
        .pattern(new RegExp('^[0-9]{9,20}$')) // El teléfono debe ser un número con 9 a 20 dígitos
        .optional(), // El teléfono es opcional
    correo: Joi.string()
        .email()
        .min(3)
        .max(100)
        .optional(), // El correo es opcional, pero debe ser válido
});

export const actualizarUsuarioSchema = Joi.object({
    nombreUsuario: Joi.string()
        .min(3)
        .max(200)
        .optional(), // El nombre de usuario es opcional en la actualización
    password: Joi.string()
        .min(6)
        .max(200)
        .optional(), // La contraseña es opcional en la actualización
    telefono: Joi.string()
        .min(9)
        .max(20)
        .pattern(new RegExp('^[0-9]{9,20}$')) // Validación para teléfono con 9 a 20 dígitos
        .optional(), // El teléfono es opcional
    correo: Joi.string()
        .email()
        .min(3)
        .max(100)
        .optional(), // El correo es opcional, pero debe ser válido
});
