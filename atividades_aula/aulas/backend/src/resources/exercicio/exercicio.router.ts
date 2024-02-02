import { Router,Request,Response } from "express"
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.send('Página principal do site');
});
router.get('/sobre', (req:Request, res:Response) => {
    res.send('Página sobre');
});

router.get('/lorem/:qtd',(req,res) =>{
    res.send(lorem.generateParagraphs(parseInt(req.params.qtd)))
})

export default router;