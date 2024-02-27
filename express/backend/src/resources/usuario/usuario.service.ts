import { PrismaClient,Usuario } from "@prisma/client";

import { CreateUsuarioDto,UpdateUsuarioDto,UsuarioDto } from "./usuario.types";

const prisma = new PrismaClient();

export async function getAllUsuarios(): Promise<Usuario[]>{
    return await prisma.usuario.findMany();
}

export async function createUsuario(usuario: CreateUsuarioDto): Promise<Usuario>{
    return await prisma.usuario.create({data : usuario});
}

export async function jaExiste(nome: string,email:string): Promise<boolean> {
    const existe = await prisma.usuario.findUnique({
        where:{
            nome,
            email
        }
    });

    return !!existe;
}

export async function buscaUsuarioPorEmail(email: string): Promise<Usuario | null> {
    return await prisma.usuario.findUnique({
        where:{
            email
        }
    });
}

export async function buscaUsuarioPorId(id: string): Promise<Usuario | null> {
    return await prisma.usuario.findUnique({
        where:{
            id
        }
    });
}

export async function updateUsuario(id:string, usuario: UpdateUsuarioDto): Promise<number> {
    const updatedUsuario = await prisma.usuario.update(
        {
            where: {
                id
            },
            data: usuario
        }
    )

    return updatedUsuario ? 1 : 0;
}

export async function deleteUsuario(id: string): Promise<number> {
    const deletedUsuario = await prisma.usuario.delete({
      where: {
        id,
      },
    });
    return deletedUsuario ? 1 : 0;
  }