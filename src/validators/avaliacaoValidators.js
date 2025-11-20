const yup = require("yup");
const objectId = require("./objectId");

module.exports = yup.object({
  matriculaId: objectId.required(),
  tipo: yup.string().required(),
  nota: yup.number().min(0).max(10).required(),
  data: yup.date().required()
});
