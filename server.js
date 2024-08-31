import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"

const port = process.env.PORT || 3000

// Verificar se a string de conexão do MongoDB está definida
if (!process.env.MONGODB_STRING_CONNECTION) {
  console.error("Erro: MONGODB_STRING_CONNECTION não está definida no arquivo .env")
  process.exit(1)
}

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => {
    console.log("Conectado ao MongoDB")
    // Iniciar o servidor após a conexão com o banco de dados
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`)
    })
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB", error.message)
    process.exit(1)
  })