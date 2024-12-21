"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darBajaRol = exports.actualizarRol = exports.obtenerRol = exports.listarRol = exports.insertarRol = void 0;
const rolService = __importStar(require("../services/rol.service"));
const base_response_1 = require("../shared/base-response");
const message_1 = require("../enums/message");
const insertarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('insertarRol');
        const rol = req.body;
        const newRol = yield rolService.insertarRol(rol);
        res.json(base_response_1.BaseResponse.success(newRol, message_1.message.INSERTADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarRol = insertarRol;
const listarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('listarRol');
        const roles = yield rolService.listarRol();
        res.json(base_response_1.BaseResponse.success(roles));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRol = listarRol;
const obtenerRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idRol } = req.params;
        const rol = yield rolService.obtenerRol(Number(idRol));
        if (!rol) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.message.NOT_FOUND, 404));
            return;
        }
        res.json(base_response_1.BaseResponse.success(rol));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.obtenerRol = obtenerRol;
const actualizarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idRol } = req.params;
        const rol = req.body;
        if (!(yield rolService.obtenerRol(Number(idRol)))) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.message.NOT_FOUND, 404));
            return;
        }
        const updateRol = yield rolService.actualizarRol(Number(idRol), rol);
        res.json(base_response_1.BaseResponse.success(updateRol, message_1.message.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarRol = actualizarRol;
const darBajaRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idRol } = req.params;
        if (!(yield rolService.obtenerRol(Number(idRol)))) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.message.NOT_FOUND, 404));
            return;
        }
        yield rolService.darBajaRol(Number(idRol));
        res.json(base_response_1.BaseResponse.success(null, message_1.message.ELIMINADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.darBajaRol = darBajaRol;
//# sourceMappingURL=rol.controller.js.map