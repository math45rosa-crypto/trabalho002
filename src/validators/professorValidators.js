const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  departamentoId: objectId.required()
});
