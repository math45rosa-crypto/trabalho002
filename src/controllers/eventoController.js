const Evento = require("../models/Evento");
const validation = require("../validations/eventoValidation");
const base = require("./baseController");

module.exports = base(Evento, validation);