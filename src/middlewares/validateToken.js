import { decodeToken } from "../utils/token.js"

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: "Token is required" })
  }

  const {
    exp,
    user_id,
  } = decodeToken(token)

  if (exp < Date.now().valueOf() / 1000) {
    return res.status(401).json({ error: "Token is expired" })
  }

  req.user_id = user_id

  next()
}