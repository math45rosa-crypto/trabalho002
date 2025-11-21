const Usuario = require('../models/Usuario');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const u = await Usuario.create(req.body);
    return res.status(201).json({ mensagem: 'Usuário criado', dados: u });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Usuario.find();
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Usuario.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Usuario.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
