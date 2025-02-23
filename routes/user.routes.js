const router = require("express").Router()
const userController = require("../controller/user.controller")
const { userProtected } = require("../middleware/protected")

router
    .post("/verify-user-email", userProtected, userController.verifyUserEmail)
    .post("/verify-user-email-otp", userProtected, userController.verifyEmailOTP)
    .post("/verify-user-mobile-otp", userProtected, userController.verifyMobileOTP)


module.exports = router