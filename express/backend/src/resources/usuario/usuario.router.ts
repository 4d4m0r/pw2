import { Router } from "express";
import usuarioController  from './usuario.controller'

const router = Router();

router.get('/', usuarioController.index);
router.post('/',usuarioController.create);
// router.get('/:id', produtoController.read);
// router.put('/:id', validate(schema),produtoController.update);
// router.delete('/:id', produtoController.remove);

export default router;