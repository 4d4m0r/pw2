import { Router } from 'express';
import languageController from './language.controller';
import languageSchema from './language.schema';
import validate from 'middlewares/validate';

const router = Router();
router.get('/change',validate(languageSchema), languageController.changeLanguage);

export default router;