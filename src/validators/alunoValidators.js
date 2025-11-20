const yup = require("yup");

module.exports = yup.object({
  nome: yup.string().required().min(3),
  email: yup.string().email().required(),
  cpf: yup.string().length(11).required(),
  telefone: yup.string().min(10).required(),
  dataNascimento: yup.date().required()
});
