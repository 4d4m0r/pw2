const express = require("express")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT ?? 4405

app.get("/", (req, res) => {
    res.send("Bem-vindo(a) à turma de PW2!")
})
app.listen(PORT,() => {
    console.log(`API rodando na porta ${PORT}`)
})