const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  data_nascimento: { type: Date },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }
}, { timestamps: true });

module.exports = mongoose.model('Aluno', AlunoSchema);
