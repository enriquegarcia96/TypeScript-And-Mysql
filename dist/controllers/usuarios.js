"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'GetUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get Usuario'
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post usuario',
        body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put usuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const delteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete usuario',
        id
    });
};
exports.delteUsuario = delteUsuario;
//# sourceMappingURL=usuarios.js.map