const Professor = require('../models/Professor');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const p = await Professor.create(req.body);
    return res.status(201).json({ mensagem: 'Professor criado', dados: p });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Professor.find().populate('departamento_id');
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Professor.findById(req.params.id).populate('departamento_id');
    if (!item) return res.status(404).json({ error: 'Professor não encontrado' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Professor não encontrado' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Professor.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Professor não encontrado' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
