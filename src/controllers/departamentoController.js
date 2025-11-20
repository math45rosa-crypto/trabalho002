const Departamento = require("../models/Departamento");
const validation = require("../validations/departamentoValidation");
const base = require("./baseController");

module.exports = base(Departamento, validation);