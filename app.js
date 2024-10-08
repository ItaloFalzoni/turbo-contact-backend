import express from "express"

import contactRoute from "./src/routes/contact.route.js"
import userRoute from "./src/routes/user.route.js"
import authRoute from "./src/routes/auth.route.js"

import { validateToken } from "./src/middlewares/validateToken.js"

const app = express()

// Middleware para parsear JSON
app.use(express.json())

// Rotas
app.use("/api/contacts", validateToken, contactRoute)
app.use("/api/users", validateToken, userRoute)
app.use("/login", authRoute)

// Rota principal
app.get("/", async (req, res) => {
  res.json("Bem-vindo à API")
})

export default app