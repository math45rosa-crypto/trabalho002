const express = require('express');
const router = express.Router();
const validator = require('../validators/alunoValidator');

router.post('/', validator.criar, (req, res) => res.send('Criar aluno'));
router.get('/', (req, res) => res.send('Listar alunos'));
router.get('/:id', (req, res) => res.send('Buscar aluno'));
router.put('/:id', validator.atualizar, (req, res) => res.send('Atualizar aluno'));
router.delete('/:id', (req, res) => res.send('Excluir aluno'));

module.exports = router;
