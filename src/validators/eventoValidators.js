const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  data: yup.date().required(),
  cursosRelacionados: yup.array(objectId)
});
