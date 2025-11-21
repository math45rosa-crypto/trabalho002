const mongoose = require('mongoose');

const MatriculaSchema = new mongoose.Schema({
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
  turma_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma', required: true },
  data_matricula: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Matricula', MatriculaSchema);
