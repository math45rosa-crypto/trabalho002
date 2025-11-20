const yup = require("yup");

module.exports = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(6).required(),
  tipo: yup.string().oneOf(["admin", "professor", "aluno"]).required()
});
