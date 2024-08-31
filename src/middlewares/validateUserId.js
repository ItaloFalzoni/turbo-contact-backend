export const validateUserId = (req, res, next) => {
  const userId = req.headers["user-id"]

  if (!userId) {
    return res.status(401).json({ error: "user-id is required" })
  }

  next()
}