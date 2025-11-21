const Disciplina = require('../models/Disciplina');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const d = await Disciplina.create(req.body);
    return res.status(201).json({ mensagem: 'Disciplina criada', dados: d });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Disciplina.find().populate('curso_id professor_id');
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Disciplina.findById(req.params.id).populate('curso_id professor_id');
    if (!item) return res.status(404).json({ error: 'Disciplina não encontrada' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Disciplina não encontrada' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Disciplina.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Disciplina não encontrada' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
