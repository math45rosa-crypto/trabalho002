const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  departamento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento' }
}, { timestamps: true });

module.exports = mongoose.model('Curso', CursoSchema);
