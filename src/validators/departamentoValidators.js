const yup = require('yup');
const { isObjectId } = require('./objectId');

const schemaCreate = yup.object({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  data_nascimento: yup.date().nullable(),
  curso_id: yup.string().test('is-objectid', 'Invalid ObjectId', v => !v || isObjectId(v))
});

const schemaUpdate = schemaCreate;

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

module.exports = {
  criar: handle(schemaCreate),
  atualizar: handle(schemaUpdate)
};
