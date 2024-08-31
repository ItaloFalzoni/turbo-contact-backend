import contactModel from "../models/contact.model.js"
import { getUserIdFromHeaders } from "../utils/getUserIdFromHeader.js"

export const getContacts = async (req, res) => {
  try {
    const userId = getUserIdFromHeaders(req)

    const contact = await contactModel.find({ userId })
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
    const userId = getUserIdFromHeaders(req)

    const contact = await contactModel.create({ userId, ...req.body })
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