const bcrypt = require("bcrypt")
const { User, Cart, Product } = require("../models")
const transporter = require("../helpers")

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData)
    return newUser
  } catch (error) {
    throw ("Error:", error)
  }
}
const createUserforGoogle = async (userData) => {
  try {
    const newUser = await User.create(userData)
    return newUser
  } catch (error) {
    throw ("Error:", error)
  }
}
const getUserById = async (userId) => {
  try {
    const user = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Cart,
          include: [Product]
        }
      ]
    })
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const getUserByEmail = async (option) => {
  try {
    const user = await User.findOne({
      where: { email: option },
    })
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const createCode = async (email) => {
  try {
    const user = await getUserByEmail(email)
    let code = ""
    for (let index = 0; index <= 5; index++) {
      const character = Math.ceil(Math.random() * 9)
      code += character
    }
    user.code = code
    user.save()
    const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: blue ;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                text-align: center;
            }
    
            .container {
                padding: 20px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                margin: 50px auto;
                max-width: 600px;
            }
    
            h1 {
                color: #333;
            }
    
            h4 {
                color: red;
            }
    
            .boton {
                background-color: #007BFF;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
            }
    
            .boton:hover {
                background-color: #0056b3;
            }
            b {
              color: white;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Codigo nuevo:</h1>
            <h4>Hola! hubo un problema en tu validacion. <br>
              Si no es usted, verifique hacer un cambio de contraseña o extremar sus medidas de seguridad.</h4>
            <h3>Si es usted, por favor, vaya al siguiente link <a class="boton" href="https://ladulcetradicion-9b3b6.web.app/verificar-email/${user.email}/${user.code}"><b>verificar</b></a></h3>
        </div>
    </body>
    </html>
    `

    const transporterSe = await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Nuevo codigo de verificación: ",
      html: htmlBody,
    })

    return transporterSe
  } catch (error) {
    throw ("Error:", error)
  }
}

const validateCode = async (code, email) => {
  try {
    const user = await getUserByEmail(email)
    if (user.code !== code) {
      throw new Error("Error: incorrect code")
    }
    user.active = true
    user.save()
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const getUsers = async () => {
  try {
    const options = {
      include: [{ all: true }],
      attributes: { exclude: ["password"] },
    }
    const users = await User.findAll(options)
    return users
  } catch (error) {
    throw ("Error:", error)
  }
}

const updateUser = async (userId, userOptions) => {
  try {
    await getUserById(userId)
    await User.update(userOptions, { where: { id: userId } })
    return getUserById(userId)
  } catch (error) {
    throw ("Error:", error)
  }
}
const patchPassword = async (code, email, newPassword) => {
  try {
    const user = await getUserByEmail(email)
    if (user.code === code) {
      user.password = newPassword.password
    }
    await user.save()
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const patchAdmins = async (userId) => {
  try {
    const user = await User.findByPk(userId.userId)
    user.admin = !user.admin
    await user.save()
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const deleteAdmins = async (userId) => {
  try {
    const user = await User.findByPk(userId.userId)
    user.admin = false
    await user.save()
    return user
  } catch (error) {
    throw ("Error:", error)
  }
}
const deleteUser = async (userId) => {
  try {
    return await User.update(
      { active: false },
      { where: { id: userId, active: true } }
    )
  } catch (error) {
    throw ("Error:", error)
  }
}
const validateUser = async (emailSelect, password) => {
  const userData = await User.findOne({
    where: { email: emailSelect },
  })
  if (userData == null) {
    return null
  }
  const hashedPassword = userData.password
  const match = await bcrypt.compare(password, hashedPassword)
  if (match) {
    try {
      const user = await User.findOne({
        where: { email: emailSelect, active: true },
      })
      if (user) {
        return user
      }
      return false
    } catch (error) {
      throw ("Error:", error)
    }
  } else {
    return false
  }
}
const validateUserGoogle = async (emailSelect) => {
  const userData = await User.findOne({
    where: { email: emailSelect },
  })
  if (userData == null) {
    return null
  }
  try {
    const user = await User.findOne({
      where: { email: emailSelect, active: true },
    })
    if (user) {
      return user
    }
    return false
  } catch (error) {
    throw ("Error:", error)
  }
}
const checkAdmins = async (userId) => {
  try {
    const user = await User.findByPk(userId)
    if (user.admin) {
      return true
    }
    return false
  } catch (error) {
    throw ("Error:", error)
  }
}
module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchPassword,
  validateUser,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
  createUserforGoogle,
  validateUserGoogle,
  checkAdmins,
}
