const { Cart, User, Product } = require("../models")

const createCart = async (productId, amount, email) => {
  const productSelect = await Product.findOne({
    where: { id: productId },
  })
  const userSelect = await User.findOne({
    where: { email },
  })
  //crea la relacion de las tablas
  if (productSelect && userSelect) {
    const relation = await Cart.create({
      amount,
      ProductId: productSelect.id,
      userId: userSelect.id,
    })
    return relation
  }
  return new Error("Error al crear el carrito")
}
const getCart = async (email) => {
  const userSelect = await User.findOne({
    where: { email },
  })
  const cart = await Cart.findAll({
    where: { userId: userSelect.id },
    include: [
      {
        model: Product,
      },
    ],
  })
  return cart
}
const updateMountCart = async (cartId, amount) => {
  const cartSelect = await Cart.findOne({
    where: { id: cartId },
  })
  console.log(cartId)

  const cartUpdated = await Cart.update({ amount }, { where: { id: cartId } })

  return cartUpdated
}

module.exports = { createCart, getCart, updateMountCart }
