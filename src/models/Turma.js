const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' },
  professor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  ano: { type: Number },
  semestre: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Turma', TurmaSchema);
