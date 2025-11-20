const Avaliacao = require("../models/Avaliacao");
const validation = require("../validations/avaliacaoValidation");
const base = require("./baseController");

module.exports = base(Avaliacao, validation);