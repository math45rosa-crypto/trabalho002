const yup = require('yup');

const schema = yup.object({
  nome: yup.string().required(),
  duracao: yup.number().positive().nullable()
});

function handle(schema) {
  return async (req, res, next) => {
    try {
      req.body = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
      next();
    } catch (err) {
      return res.status(400).json({ errors: err.errors });
    }
  };
}

module.exports = { criar: handle(schema), atualizar: handle(schema) };
