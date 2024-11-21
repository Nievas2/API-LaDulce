const { CartProvider } = require("../providers")

const createCart = async (productId, amount, email) => {
  CartProvider.createCart(productId, amount, email)
}
const getCart = async (email) => CartProvider.getCart(email)
const updateMountCart = async (id, amount) => CartProvider.updateMountCart(id, amount)

module.exports = { createCart, getCart, updateMountCart }
