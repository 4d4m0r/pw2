import { Router } from 'express';
import produtoRouter from '../resources/produto/produto.router';
import loremRouter from '../resources/lorem/lorem.router';
import languageRouter from '../resources/language/language.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use('/', authRouter);
router.use('/produto', produtoRouter);
router.use('/lorem', loremRouter);
router.use('/language', languageRouter);
router.use('/usuario', usuarioRouter);

export default router;
