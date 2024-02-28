import Joi from 'joi';

import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

const schema = Joi.object({
  nome: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  senha: Joi.number().integer().required(),
  tipoUsuarioId: Joi.valid(
    TiposUsuarios.ADMIN,
    TiposUsuarios.CLIENT,
  ),
});

export default schema;
