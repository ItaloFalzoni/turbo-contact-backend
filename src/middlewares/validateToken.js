import { decodeToken } from "../utils/token.js"

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: "Token is required" })
  }

  const { user_id } = decodeToken(token)

  if (!user_id) {
    return res.status(401).json({ error: "Token is invalid or expired" })
  }

  req.user_id = user_id

  next()
}