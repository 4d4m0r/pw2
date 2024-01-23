import { rename } from "fs/promises";

async function myRename(filename1: string, filename2: string) : Promise<void> {
    await rename(filename1, filename2);
}

console.log(1)
myRename("imagem1.png", "imagem2.png").then(() =>
    console.log("Renomeação concluida")
);
console.log(2)