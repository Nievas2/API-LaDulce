const express = require("express")
const { body } = require("express-validator")
const { UserController, DollarController } = require("../controllers")
const {
  authMW,
  adminCheck
} = require("../middleware/authentication.middleware")

const router = express.Router()
router.get("/:userId", authMW, adminCheck, UserController.getUserById)

router.delete("/admin/:userId", authMW, adminCheck, UserController.deleteAdmins)
router.get("/", authMW, adminCheck, UserController.getUsers)
router.get("/email/:email", UserController.getUserByEmail)
router.post(
  "/",
  body("firstName").isString(),
  body("lastName").isString(),
  body("email").isEmail(),
  body("phone").isString(),
  body("password").isString(),
  UserController.createUser
)
router.patch(
  "/admins",
  body("userId").isInt(),
  authMW,
  adminCheck,
  UserController.patchAdmins
)

router.post(
  "/createnewcode",
  body("email").isString(),
  UserController.createCode
)
router.get("/verificar-email/:email/:code", UserController.validateCode)
router.put(
  "/:userId",
  body("firstName").isString(),
  body("lastName").isString(),
  body("email").isEmail(),
  body("phone").isString(),
  body("password").isString(),
  authMW,
  adminCheck,
  UserController.updateUser
)

router.patch(
  "/newpassword/:code/:email",
  body("password").isString(),
  UserController.updatePassword
)
router.post(
  "/passwordrecovery",
  body("email").isString(),
  UserController.passwordRecovery
)
router.post(
  "/contact/:email",
  body("mensage").isString(),
  UserController.contact
)
router.post(
  "/ticket",
  body("mensage").isString(),
  body("email").isString(),
  UserController.ticket
)
router.delete("/:userId", authMW, adminCheck, UserController.deleteUser)

router.patch(
  "/update/:id",
  authMW,
  adminCheck,
  body("price").isInt(),
  DollarController.updatePrice
)
module.exports = router
