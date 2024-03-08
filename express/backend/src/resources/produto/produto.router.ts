import { Router } from 'express';

import produtoController from './produto.controller';
import validate from '../../middlewares/validate';
import schema from './produto.schema';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

router.get('/', produtoController.index);
router.post('/', validate(schema),produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', validate(schema),produtoController.update);
router.delete('/:id', produtoController.remove);

export default router;

