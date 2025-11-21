const Evento = require('../models/Evento');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const e = await Evento.create(req.body);
    return res.status(201).json({ mensagem: 'Evento criado', dados: e });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Evento.find().populate('usuario_id');
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Evento.findById(req.params.id).populate('usuario_id');
    if (!item) return res.status(404).json({ error: 'Evento não encontrado' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Evento não encontrado' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Evento.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Evento não encontrado' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
