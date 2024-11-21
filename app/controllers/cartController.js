const { CartService } = require("../services")

const createCart = async (req, res) => {
  const { productId, amount, email } = req.query
  try {
    const cart = await CartService.createCart(productId, amount, email)
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
const getCart = async (req, res) => {
  const { email } = req.query
  try {
    const cart = await CartService.getCart(email)
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
const updateMountCart = async (req, res) => {
  const { cartId, amount } = req.query
  try {
    const cart = await CartService.updateMountCart(cartId, amount)
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createCart, getCart, updateMountCart
}
