const yup = require("yup");

module.exports = yup.string().matches(/^[0-9a-fA-F]{24}$/, "ID inválido");
