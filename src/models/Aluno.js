const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  telefone: { type: String, required: true },
  dataNascimento: { type: Date, required: true }
});

module.exports = mongoose.model("Aluno", AlunoSchema);
