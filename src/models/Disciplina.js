const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  carga_horaria: { type: Number },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
  professor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }
}, { timestamps: true });

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
