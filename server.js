import express from "express"
import dotenv from "dotenv"
import hrRouter from "./src/routes/hrRouter.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use('/funcionarios', hrRouter)

const PORT = process.env.PORT || 3306
app.listen(PORT, () =>{
    
    console.log(`Servidor rodando na Porta: ${PORT}`)
})
