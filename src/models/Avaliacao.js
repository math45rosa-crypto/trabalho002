const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  matricula_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Matricula', required: true },
  nota: { type: Number, required: true },
  observacao: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);
