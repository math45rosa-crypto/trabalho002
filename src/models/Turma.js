const mongoose = require("mongoose");

const TurmaSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  ano: { type: Number, required: true },
  semestre: { type: Number, required: true },
  disciplinaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Disciplina",
    required: true
  },
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor",
    required: true
  }
});

module.exports = mongoose.model("Turma", TurmaSchema);
