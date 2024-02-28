import { PrismaClient, Usuario } from '@prisma/client';
import { compare } from 'bcryptjs';

import { LoginDto } from './auth.types';

const prisma = new PrismaClient();

export async function checkCredentails({
  email,
  senha,
}: LoginDto): Promise<false | Usuario> {
  const usuario = await prisma.usuario.findUnique({ where: { email } });

  if(!usuario) return false;
  const ok =  await compare(senha,usuario.senha);

  if(ok) return usuario;
  return false;
}
