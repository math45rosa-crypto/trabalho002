const Professor = require("../models/Professor");
const validation = require("../validations/professorValidation");
const base = require("./baseController");

module.exports = base(Professor, validation);
