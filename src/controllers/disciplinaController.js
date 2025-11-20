const Disciplina = require("../models/Disciplina");
const validation = require("../validations/disciplinaValidation");
const base = require("./baseController");

module.exports = base(Disciplina, validation);