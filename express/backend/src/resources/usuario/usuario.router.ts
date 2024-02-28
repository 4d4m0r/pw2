import { Router } from "express";

import validate from "../../middlewares/validate";
import usuarioController  from './usuario.controller'
import schema from "./usuario.schema";

const router = Router();

router.get('/', usuarioController.index);
router.post('/', validate(schema),usuarioController.create);
router.get('/:id', usuarioController.read);
router.put('/:id', validate(schema),usuarioController.update);
router.delete('/:id', usuarioController.remove);

export default router;