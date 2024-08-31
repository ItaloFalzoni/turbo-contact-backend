import contactModel from "../models/contact.model.js"

export const validateContactsByUserId = async (req, res, next) => {
  try {
    const contact = await contactModel.findById(req.params.id)

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" })
    }

    if (contact.userId.toString() !== req.user_id) {
      return res.status(403).json({ error: "Unauthorized to update this contact" })
    }

    req.contact = contact

    next()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}