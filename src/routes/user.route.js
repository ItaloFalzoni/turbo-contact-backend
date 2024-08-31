import express from "express"
import { createUser, getUsers } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/api/users", createUser)
router.get("/api/users", getUsers)

export default router