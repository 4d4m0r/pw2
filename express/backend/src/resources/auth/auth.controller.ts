import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';
import { createUsuario } from '../usuario/usuario.service';
import { checkCredentails } from './auth.service';
import { LoginDto, SignupDto } from './auth.types';

async function signup(req: Request, res: Response) {
  const usuario = req.body as SignupDto;

  try {
    const novoUsuario = await createUsuario({
      ...usuario,
      tipoUsuarioId: TiposUsuarios.CLIENT,
    });
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

async function login(req: Request, res: Response) {
  const credentials = req.body as LoginDto;
  try {
    const usuario = await checkCredentails(credentials);
    if (usuario) {
      req.session.uid = usuario.id;
      req.session.tipoUsuarioId = usuario.tipoUsuarioId;
      res.status(StatusCodes.OK).json({nome: usuario.nome, TiposUsuario: usuario.tipoUsuarioId==TiposUsuarios.CLIENT ? 'client' : 'admin'});
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

async function logout(req: Request, res: Response) {
  if (!req.session.uid)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(ReasonPhrases.UNAUTHORIZED);
  req.session.destroy((err) => {
    if (err) res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  });
}

export default { signup, login, logout };
