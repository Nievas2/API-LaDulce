const { UserProvider } = require("../providers")

const getUserById = async (userId) => UserProvider.getUserById(userId)

const getUserByEmail = async (option) => UserProvider.getUserByEmail(option)

const getUsers = async () => UserProvider.getUsers()

const createUser = async (user) => UserProvider.createUser(user)

const updateUser = async (id, user) => UserProvider.updateUser(id, user)

const patchPassword = async (code, email, newPassword) =>
  UserProvider.patchPassword(code, email, newPassword)

const passwordRecovery = async (email) => UserProvider.passwordRecovery(email)

const deleteUser = async (id) => UserProvider.deleteUser(id)

const validateCode = async (code, email) =>
  UserProvider.validateCode(code, email)

const createCode = async (email) => UserProvider.createCode(email)

const patchAdmins = async (userId) => UserProvider.patchAdmins(userId)

const deleteAdmins = async (userId) => UserProvider.deleteAdmins(userId)

module.exports = {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  patchPassword,
  getUserByEmail,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
  passwordRecovery
}
