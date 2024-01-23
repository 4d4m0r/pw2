import { createServer, IncomingMessage, ServerResponse } from "http";
import { readdir , readFile} from "fs/promises"
import { config as dotenvConfig } from "dotenv";
import { createLink,voltar } from "./utils/links"

dotenvConfig();

const PORT = process.env.PORT ?? 3333;
const DIR = process.argv[2] ?? "./public"

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })

    if(req.url === '/') {
        const files = await readdir(DIR)
        res.write(files.map(file => createLink(file)).join("<br>"))
        res.end();
    }else if(req.url === "/favicon.ico"){
        res.end()
    }else{
        res.write(voltar())
        const content = await readFile(`${DIR}${req.url}`)
        res.end(content)
    }
});

server.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
});
