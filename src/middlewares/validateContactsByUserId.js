import contactModel from "../models/contact.model.js"
import { getUserIdFromHeaders } from "../utils/getUserIdFromHeader.js"

export const validateContactsByUserId = async (req, res, next) => {
  try {
    const userId = getUserIdFromHeaders(req)

    const contact = await contactModel.findById(req.params.id)

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" })
    }

    if (contact.userId.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized to update this contact" })
    }

    req.contact = contact

    next()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}