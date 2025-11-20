const Matricula = require("../models/Matricula");
const validation = require("../validations/matriculaValidation");
const base = require("./baseController");

module.exports = base(Matricula, validation);