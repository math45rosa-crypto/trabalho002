const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  senha_hash: { type: String, required: true },
  papel: { type: String, default: 'usuario' } // ex: admin, professor, aluno
}, { timestamps: true });

module.exports = mongoose.model('Usuario', UsuarioSchema);
