import express from 'express';
import * as compraController from './compra.controller';

const router = express.Router();

router.post('/adicionar', compraController.adicionarProduto);
router.post('/concluir', compraController.concluir);

export default router;
