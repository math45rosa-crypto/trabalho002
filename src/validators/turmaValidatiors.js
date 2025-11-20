const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  codigo: yup.string().required(),
  ano: yup.number().required(),
  semestre: yup.number().min(1).max(2).required(),
  disciplinaId: objectId.required(),
  professorId: objectId.required()
});
