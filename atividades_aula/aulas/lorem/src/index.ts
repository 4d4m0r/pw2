import { createServer } from "http"
import { config as dotenvConfig} from "dotenv"
import { LoremIpsum } from "lorem-ipsum";
import { button } from "./utils/paragrafos"

dotenvConfig()
const PORT = process.env.PORT ?? 4444

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//       max: 8,
//       min: 4
//     },
//     wordsPerSentence: {
//       max: 16,
//       min: 4
//     }
//   });

const server = createServer(async(req,res) => {
    res.writeHead(200,{"COntent-Type": "text/html;charset=utf-8"})

    res.write(button())
})

server.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
});