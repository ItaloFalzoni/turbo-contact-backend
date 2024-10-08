import contactModel from "../models/contact.model.js"

export const getContacts = async (req, res) => {
  try {
    const contact = await contactModel.find({ userId: req.user_id })
    res.json(contact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getContactById = async (req, res) => {
  try {
    res.json(req.contact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createContact = async (req, res) => {
  try {
    const contact = await contactModel.create({ userId: req.user_id, ...req.body })
    res.json(contact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params

    const updatedContact = await contactModel.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updatedContact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params

    await contactModel.findByIdAndDelete(id)
    res.json({ message: "Contact deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}