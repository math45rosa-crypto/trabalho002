const Usuario = require("../models/Usuario");
const validation = require("../validations/usuarioValidation");
const base = require("./baseController");

module.exports = base(Usuario, validation);