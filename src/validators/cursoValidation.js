const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  departamentoId: objectId.required()
});
