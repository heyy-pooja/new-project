const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "https://res.cloudinary.com/da5klmpqb/image/upload/v1721291355/download_w2o5rv.jpg" },
    emailverified: { type: Boolean, default: false },
    mobileverified: { type: Boolean, default: false },
    emailCode: { type: String },
    mobileCode: { type: String },
    active: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    mobile: { type: Number, required: true },
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)