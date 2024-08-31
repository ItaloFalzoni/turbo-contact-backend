import express from "express"
import { getContacts, getContactById, createContact, updateContact, deleteContact } from "../controllers/contact.controller.js"

import { validateUserId } from "../middlewares/validateUserId.js"
import { validateContactsByUserId } from "../middlewares/validateContactsByUserId.js"

const router = express.Router()

router.use(validateUserId)

router.get("/", getContacts)
router.get("/:id", validateContactsByUserId, getContactById)
router.post("/", createContact)
router.put("/:id", validateContactsByUserId, updateContact)
router.delete("/:id", validateContactsByUserId, deleteContact)

export default router