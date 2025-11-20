const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  departamentoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Departamento",
    required: true
  }
});

module.exports = mongoose.model("Curso", CursoSchema);
