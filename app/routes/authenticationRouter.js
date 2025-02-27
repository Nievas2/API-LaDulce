const axios = require("axios")
const bcrypt = require("bcrypt")
const express = require("express")
const jwt = require("jsonwebtoken")
const authmw = require("../middleware/authentication.middleware")
const userProvider = require("../providers/userProvider")

const router = express.Router()
const saltRounds = parseInt(process.env.SALTROUNDS)
router.post("/", async (req, res) => {
  const { email, password } = req.body
  const user = await userProvider.validateUser(email, password)

  if (user != null && user !== false) {
    const token = jwt.sign(
      { id: user.id, email, isAdmin: user.admin },
      authmw.SECRET
    )
    res.json({ token })
  } else {
    res.status(400).json({ message: "Contraseña o email incorrecto" })
  }
})

router.post("/login/google", async (req, res) => {
  const { token } = req.body
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    const exist = await userProvider.getUserByEmail(response.data.email)
    if (!exist) {
      const hashedPassword = await bcrypt.hash(
        process.env.google_password,
        saltRounds
      )
      const user = {
        email: response.data.email,
        firstName: response.data.given_name,
        lastName: response.data.family_name,
        password: hashedPassword
      }
      const userCreated = await userProvider.createUser(user)
      const tokenValue = jwt.sign(
        {
          id: userCreated.id,
          email: userCreated.email,
          isAdmin: userCreated.admin
        },
        authmw.SECRET
      )
      return res.json({ token: tokenValue }) // Return here to prevent further execution
    } else {
      const user = await userProvider.validateUserGoogle(response.data.email)
      if (user != null && user !== false) {
        const tokenValue = jwt.sign(
          { id: user.id, email: user.email, isAdmin: user.admin },
          authmw.SECRET
        )
        return res.json({ token: tokenValue }) // Return here as well
      }
      return res.status(401).json({ message: "Authentication failed" }) // Ensure this is also a return
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" }) // Handle errors gracefully
  }
})

module.exports = router
