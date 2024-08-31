import userModel from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js"

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await userModel.find({ username, password })

    if (user.length === 0) {
      return res.status(401).json({ error: "Wrong credentials" })
    }

    const token = generateToken(user[0])

    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}