const express = require('express');
const router = express.Router();
const validator = require('../validators/eventoValidator');

router.post('/', validator.criar, (req, res) => res.send('Criar evento'));
router.get('/', (req, res) => res.send('Listar eventos'));
router.get('/:id', (req, res) => res.send('Buscar evento'));
router.put('/:id', validator.atualizar, (req, res) => res.send('Atualizar evento'));
router.delete('/:id', (req, res) => res.send('Excluir evento'));

module.exports = router;
