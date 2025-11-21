const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  departamento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento' }
}, { timestamps: true });

module.exports = mongoose.model('Professor', ProfessorSchema);
