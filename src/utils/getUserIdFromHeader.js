export const getUserIdFromHeaders = (req) => {
  return req.headers["user-id"]
}