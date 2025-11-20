const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  nome: yup.string().required(),
  cargaHoraria: yup.number().required(),
  cursoId: objectId.required()
});
