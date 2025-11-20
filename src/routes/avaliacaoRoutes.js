const express = require('express');
const router = express.Router();
const validator = require('../validators/avaliacaoValidator');

router.post('/', validator.criar, (req, res) => res.send('Criar avaliação'));
router.get('/', (req, res) => res.send('Listar avaliações'));
router.get('/:id', (req, res) => res.send('Buscar avaliação'));
router.put('/:id', validator.atualizar, (req, res) => res.send('Atualizar avaliação'));
router.delete('/:id', (req, res) => res.send('Excluir avaliação'));

module.exports = router;
