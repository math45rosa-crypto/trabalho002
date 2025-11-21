const Aluno = require('../models/Aluno');
const { sendError } = require('./baseController');

exports.criar = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    return res.status(201).json({ mensagem: 'Aluno criado com sucesso', dados: aluno });
  } catch (err) { return sendError(res, err); }
};

exports.listar = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('curso_id');
    return res.json(alunos);
  } catch (err) { return sendError(res, err); }
};

exports.buscarPorId = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id).populate('curso_id');
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    return res.json(aluno);
  } catch (err) { return sendError(res, err); }
};

exports.atualizar = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    return res.json({ mensagem: 'Atualizado', dados: aluno });
  } catch (err) { return sendError(res, err); }
};

exports.excluir = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    return res.status(204).send();
  } catch (err) { return sendError(res, err); }
};
