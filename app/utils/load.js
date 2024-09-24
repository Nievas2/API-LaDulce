/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt")

const saltRounds = 10

const {
  Category,
  User,
  Product,
  Dollar,
  SubCategory,
  ImageProduct,
  ImagesProductAsocciation,
  SubCategoryProduct
} = require("../models")
const { ProductProvider, ImageProductProvider } = require("../providers")
async function start() {
  const dollar = await Dollar.create({ price: 985 })
  const admin = await User.create({
    firstName: "Gabriel",
    lastName: "Nievas",
    code: "JP001",
    email: "angelgabrielnievas@gmail.com",
    phone: "3544596443",
    password: await bcrypt.hash("adminn", saltRounds),
    active: true,
    admin: true
  })
  const admin2 = await User.create({
    firstName: "Florencia",
    lastName: "Nievas",
    code: "JP001",
    email: "ladulcetradicion96@gmail.com",
    phone: "1162569879",
    password: await bcrypt.hash("adminn", saltRounds),
    active: true,
    admin: true
  })

  const Category1 = await Category.create({
    name: "Pastelería",
    image: "https://i.ibb.co/7bqwkwS/5.png"
  })
  const Category3 = await Category.create({
    name: "Lunch",
    image: "https://i.ibb.co/bKCkFcT/4.png"
  })
  const Category4 = await Category.create({
    name: "Perniles y carnes",
    image: "https://i.ibb.co/60zydsD/3.png"
  })
  const Category2 = await Category.create({
    name: "Tortas",
    image: "https://i.ibb.co/2FBcTBG/6.png"
  })
  const Category5 = await Category.create({
    name: "Combos y agregados",
    image: "https://i.ibb.co/WnQ0VBp/7.png"
  })
  const product1 = {
    name: "Sanguchitos de Lunch",
    image: "https://i.ibb.co/8sfmPMs/sanguchito-1.webp",
    description:
      "Caja de 24 unidades de sanguchitos de lunch, tamaño tipo chip.\n",
    price: 3,
    CategoryName: "Lunch"
  }
  await ProductProvider.createProduct(product1)
  await SubCategory.create({
    date: "jamon y queso",
    price: 3,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 1
  })
  await SubCategory.create({
    date: "salame y queso",
    price: 4,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 2
  })
  await SubCategory.create({
    date: "lomito, queso y tomate",
    price: 4,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 3
  })
  await SubCategory.create({
    date: "Pollo a la mostaza",
    price: 5,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 4
  })
  await SubCategory.create({
    date: "Cerdo desmechado",
    price: 5,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 5
  })
  await SubCategory.create({
    date: "Rucula, queso y tomate",
    price: 4,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 6
  })
  await SubCategory.create({
    date: "Bife a la criolla",
    price: 5,
    Product: 1
  })
  await SubCategoryProduct.create({
    ProductId: 1,
    SubCategoryId: 7
  })
  await ImageProduct.create({
    image: "https://i.ibb.co/8sfmPMs/sanguchito-1.webp",
    Product: 1
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 1,
    ProductId: 1
  })
  await ImageProduct.create({
    image: "https://i.ibb.co/LRd7vqb/sanguchito-3.webp",
    Product: 1
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 2,
    ProductId: 1
  })
  await ImageProduct.create({
    image: "https://i.ibb.co/qCbHTyz/sanguchito-2.webp",
    Product: 1
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 3,
    ProductId: 1
  })
  /* segundo producto */
  const product2 = {
    name: "Bandeja Degustación",
    image: "https://i.ibb.co/XXnqLFZ/20210714-075448.webp",
    description:
      "Bandeja de 4 Minitartas de 14cm, con sabores a elección.<br>\n<br>\nOpciones disponibles: <br>\n-Lemon pie <br>\n-Tarta tofi negro<br>\n-Tarta tofi blanco <br>\n-Torta brownie <br>\n-Cheesecake <br>\n-Tarta de frutilla<br>\n-Coco y dulce de leche<br>\n-Ricota <br>\n-Frutos rojos <br>\n<br>\nSe detalla la elección de sabores al finalizar la compra",
    price: 5,
    CategoryName: "Pastelería"
  }
  await ProductProvider.createProduct(product2)
  await ImageProduct.create({
    image: "https://i.ibb.co/XXnqLFZ/20210714-075448.webp",
    Product: 2
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 4,
    ProductId: 2
  })
  await ImageProduct.create({
    image: "https://i.ibb.co/xDc0DWW/IMG-20221015-104141.webp",
    Product: 2
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 5,
    ProductId: 2
  })
  await ImageProduct.create({
    image: "https://i.ibb.co/55Fygz4/20210714-075545.webp",
    Product: 2
  })
  await ImagesProductAsocciation.create({
    ImageProductId: 6,
    ProductId: 2
  })
}
start()
