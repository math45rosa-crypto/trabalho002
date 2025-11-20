const Turma = require("../models/Turma");
const validation = require("../validations/turmaValidation");
const base = require("./baseController");

module.exports = base(Turma, validation);