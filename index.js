const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const cookiParser = require("cookie-parser")
// const dotenv = require("dotenv")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: process.env.NODE_ENV === "devolopment"
        ? "http://localhost:5173"
        : process.env.LIVE_SERVER,
    credentials: true
}))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use("*", (err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: `server error ${err.message}` })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO_CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})