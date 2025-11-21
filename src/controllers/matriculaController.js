const Matricula = require('../models/Matricula');
const { sendError } = require('./baseController');

exports.criar = async (req,res) => {
  try {
    const m = await Matricula.create(req.body);
    return res.status(201).json({ mensagem: 'Matrícula criada', dados: m });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req,res) => {
  try {
    const list = await Matricula.find().populate('aluno_id turma_id');
    return res.json(list);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req,res) => {
  try {
    const item = await Matricula.findById(req.params.id).populate('aluno_id turma_id');
    if (!item) return res.status(404).json({ error: 'Matrícula não encontrada' });
    return res.json(item);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req,res) => {
  try {
    const item = await Matricula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Matrícula não encontrada' });
    return res.json({ mensagem: 'Atualizado', dados: item });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req,res) => {
  try {
    const item = await Matricula.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Matrícula não encontrada' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
