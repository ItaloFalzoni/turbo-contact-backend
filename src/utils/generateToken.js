import jsonwebtoken from "jsonwebtoken"

export const generateToken = user => {
  return jsonwebtoken.sign({
    username: user.username,
    user_id: user._id
  }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  })
}