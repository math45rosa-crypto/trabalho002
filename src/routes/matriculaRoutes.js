const express = require('express');
const router = express.Router();
const validator = require('../validators/turmaValidator');

router.post('/', validator.criar, (req, res) => res.send('Criar turma'));
router.get('/', (req, res) => res.send('Listar turmas'));
router.get('/:id', (req, res) => res.send('Buscar turma'));
router.put('/:id', validator.atualizar, (req, res) => res.send('Atualizar turma'));
router.delete('/:id', (req, res) => res.send('Excluir turma'));

module.exports = router;
