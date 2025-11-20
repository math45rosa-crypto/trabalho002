const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  alunoId: objectId.required(),
  turmaId: objectId.required(),
  dataMatricula: yup.date().required()
});
