const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  data: { type: Date, required: true },
  cursosRelacionados: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Curso" }
  ]
});

module.exports = mongoose.model("Evento", EventoSchema);
