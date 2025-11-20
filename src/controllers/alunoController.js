const Aluno = require("../models/Aluno");
const validation = require("../validations/alunoValidation");
const base = require("./baseController");

module.exports = base(Aluno, validation);