const mongoose = require("mongoose");

const MatriculaSchema = new mongoose.Schema({
  alunoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Aluno",
    required: true
  },
  turmaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Turma",
    required: true
  },
  dataMatricula: { type: Date, required: true }
});

module.exports = mongoose.model("Matricula", MatriculaSchema);
