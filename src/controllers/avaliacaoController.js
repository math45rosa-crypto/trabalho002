const Avaliacao = require('../models/Avaliacao');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const a = await Avaliacao.create(req.body);
    return res.status(201).json({ mensagem: 'Avaliação criada', dados: a });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Avaliacao.find().populate('aluno_id turma_id');
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Avaliacao.findById(req.params.id).populate('aluno_id turma_id');
    if (!item) return res.status(404).json({ error: 'Avaliação não encontrada' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Avaliação não encontrada' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Avaliacao.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Avaliação não encontrada' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
