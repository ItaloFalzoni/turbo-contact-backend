import mongoose from "mongoose"

const ContactScrema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  surname: {
    type: String,
    required: [true, "Surname is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  birthDate: {
    type: String,
    required: [true, "Birth date is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "UserId is required"],
  },
}, {
  timestamps: true,
})

export default mongoose.model("Contact", ContactScrema)