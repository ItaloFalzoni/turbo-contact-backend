import userModel from "../models/user.model.js"

export const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}