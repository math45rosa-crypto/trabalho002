const express = require('express');
const router = express.Router();
const validator = require('../validators/alunoValidators');
const controller = require('../controllers/alunoController');

router.post('/', validator.criar, controller.criar);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', validator.atualizar, controller.atualizar);
router.delete('/:id', controller.excluir);

module.exports = router;


