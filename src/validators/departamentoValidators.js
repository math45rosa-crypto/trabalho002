const yup = require("yup");

module.exports = yup.object({
  nome: yup.string().required(),
  sigla: yup.string().min(2).max(5).required()
});
