const express = require("express")
const app = express()
app.get("/", (req, res) => {
res.send("Bem-vindo(a) à turma de PW2!")
})
app.listen(3000)asdsa