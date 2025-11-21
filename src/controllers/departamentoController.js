const Departamento = require('../models/Departamento');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const d = await Departamento.create(req.body);
    return res.status(201).json({ mensagem: 'Departamento criado', dados: d });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Departamento.find();
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Departamento.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Departamento.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
