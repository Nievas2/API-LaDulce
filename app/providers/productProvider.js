/* eslint-disable indent */
const { Op } = require("sequelize")
const {
  Product,
  Category,
  SubCategoryProduct,
  ImageProduct,
  SubCategory,
  ImagesProductAsocciation
} = require("../models")
const CategoryProvider = require("./categoryProvider")

const pageSize = parseInt(process.env.PAGESIZE)
const createProduct = async (ProductOptions) => {
  try {
    //obtiene el objeto
    const getObjetCategory = await CategoryProvider.getCategoryByName(
      ProductOptions.CategoryName
    )

    const newProduct = await Product.create({
      name: ProductOptions.name,
      image: "",
      description: ProductOptions.description,
      price: ProductOptions.price,
      CategoryId: getObjetCategory.dataValues.id
    })
    return newProduct
  } catch (error) {
    throw error
  }
}

const getProductById = async (productId) => {
  try {
    const productSelect = await Product.findOne({
      where: { id: productId },
      include: [
        {
          model: SubCategoryProduct,
          include: [SubCategory]
        },
        {
          model: Category
        },
        {
          model: ImagesProductAsocciation,
          include: [ImageProduct]
        }
      ]
    })
    return productSelect
  } catch (error) {
    throw error
  }
}

const getProductByName = async (name) => {
  try {
    const productSelect = await Product.findOne({
      where: { name },
      include: [
        {
          model: SubCategoryProduct,
          include: [SubCategory]
        },
        {
          model: Category
        },
        {
          model: ImagesProductAsocciation,
          include: [ImageProduct]
        }
      ]
    })
    return productSelect
  } catch (error) {
    throw error
  }
}

const getProducts = async (page, query, categoryId) => {
  const limit = pageSize // Número de registros por página
  const offset = (page - 1) * pageSize // Calcular desde dónde comenzar

  try {
    const whereConditions = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${query}%` // Coincidencia parcial
          }
        }
      ]
    }

    // Solo agrega la condición de CategoryId si categoryId no está vacío
    if (categoryId) {
      whereConditions.CategoryId = {
        [Op.eq]: categoryId
      }
    }

    const data = await Product.findAndCountAll({
      limit,
      offset,
      where: whereConditions,
      include: [
        {
          model: SubCategoryProduct,
          include: [SubCategory]
        },
        {
          model: Category
        },
        {
          model: ImagesProductAsocciation,
          include: [ImageProduct]
        }
      ],
      distinct: true // Asegúrate de que los resultados sean únicos
    })

    const { count } = data
    const products = data.rows
    const totalPages = Math.ceil(count / pageSize)

    // Obtener el último ID si hay productos
    const lastId = products.length > 0 ? products[products.length - 1].id : null

    return {
      products,
      page,
      pageSize,
      totalPages,
      totalProducts: count,
      lastId // Agregar lastId al retorno
    }
  } catch (error) {
    console.error("Error fetching products:", error) // Mejora el manejo de errores
    throw error
  }
}

const updateProduct = async (ProductId, ProductOptions) => {
  try {
    const category = await CategoryProvider.getCategoryByName(
      ProductOptions.CategoryName
    )
    const product = await getProductById(ProductId)
    await Product.update(
      {
        name: ProductOptions.name,
        description: ProductOptions.description,
        price: ProductOptions.price,
        image: product.image,
        CategoryId: category.dataValues.id
      },
      { where: { id: ProductId } }
    )
    return Product.findByPk(ProductId)
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (ProductId) => {
  try {
    const select = await Product.destroy({ where: { id: ProductId } })
    return select
  } catch (error) {
    throw error
  }
}

//exports
module.exports = {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductByName
}
