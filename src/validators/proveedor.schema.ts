import Joi from "joi";

export const insertarProveedorSchema = Joi.object({
        razonSocial: Joi.string()
                .min(3)
                .max(200)
                .required(),
        tipoDocumento: Joi.string()
                .min(3)
                .max(10)
                .required(),
        numeroDocumento: Joi.string()
                .min(8)
                .max(15)
                .required()
                .pattern(new RegExp('^[0-9]{8,15}$')),
        telefono: Joi.string()
                .min(9)
                .max(20)
                .optional(),
        correo: Joi.string()
                .email()
                .min(3)
                .max(100)
                .optional(),
        direccion: Joi.string()
                .min(3)
                .max(500)
                .optional()

});

export const actualizarProveedorSchema = Joi.object({
        razonSocial: Joi.string()
                .min(3)
                .max(200)
                .optional(),
        tipoDocumento: Joi.string()
                .min(3)
                .max(10)
                .required(),
        numeroDocumento: Joi.string()
                .min(8)
                .max(15)
                .optional()
                .pattern(new RegExp('^[0-9]{8,15}$')),
        telefono: Joi.string()
                .min(9)
                .max(20)
                .optional(),
        correo: Joi.string()
                .email()
                .min(3)
                .max(100)
                .optional(),
        direccion: Joi.string()
                .min(3)
                .max(500)
                .optional()
});