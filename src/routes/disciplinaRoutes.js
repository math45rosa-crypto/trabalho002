const express = require('express');
const router = express.Router();
const validator = require('../validators/disciplinaValidator');

router.post('/', validator.criar, (req, res) => res.send('Criar disciplina'));
router.get('/', (req, res) => res.send('Listar disciplinas'));
router.get('/:id', (req, res) => res.send('Buscar disciplina'));
router.put('/:id', validator.atualizar, (req, res) => res.send('Atualizar disciplina'));
router.delete('/:id', (req, res) => res.send('Excluir disciplina'));

module.exports = router;
