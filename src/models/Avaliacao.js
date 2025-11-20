const mongoose = require("mongoose");

const AvaliacaoSchema = new mongoose.Schema({
  matriculaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Matricula",
    required: true
  },
  tipo: { type: String, required: true },
  nota: { type: Number, required: true },
  data: { type: Date, required: true }
});

module.exports = mongoose.model("Avaliacao", AvaliacaoSchema);
