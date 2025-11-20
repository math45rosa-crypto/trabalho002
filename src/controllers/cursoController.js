const Curso = require("../models/Curso");
const validation = require("../validations/cursoValidation");
const base = require("./baseController");

module.exports = base(Curso, validation);