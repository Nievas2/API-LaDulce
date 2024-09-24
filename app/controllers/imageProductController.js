const cloudinary = require("cloudinary").v2
const { ImageProductService } = require("../services")

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})

const getImageProducts = async (req, res) => {
  try {
    const ImageProducts = await ImageProductService.getImageProducts()
    res.status(200).json(ImageProducts)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const createImageProduct = async (req, res) => {
  const { ImageProductId } = req.params
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No se proporcionó ninguna imagen" })
  }

  // Obtener el archivo del objeto req.files
  const imageFile = req.files.image
  // Subir la imagen a Cloudinary usando un stream
  const uploadStream = cloudinary.uploader.upload_stream(
    async (error, result) => {
      if (error) {
        console.error("Error al subir a Cloudinary:", error)
        return res.status(500).json({ error: "Error al subir la imagen" })
      }
      const newImageProduct = await ImageProductService.createImageProduct({
        response: result.secure_url,
        idProduct: ImageProductId
      })

      return res.status(201).json(newImageProduct)
    }
  )

  // Convertir el archivo a un buffer y subirlo
  uploadStream.end(imageFile.data)
}

const updateImageProduct = async (req, res) => {
  const { ImageProductId } = req.params
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No se proporcionó ninguna imagen" })
  }

  // Obtener el archivo del objeto req.files
  const imageFile = req.files.image
  // Subir la imagen a Cloudinary usando un stream
  const uploadStream = cloudinary.uploader.upload_stream(
    async (error, result) => {
      if (error) {
        console.error("Error al subir a Cloudinary:", error)
        return res.status(500).json({ error: "Error al subir la imagen" })
      }
      const updateImageProductResponse = await ImageProductService.updateImageProduct({
        response: result.secure_url,
        idProduct: ImageProductId
      })

      return res.status(201).json(updateImageProductResponse)
    }
  )

  // Convertir el archivo a un buffer y subirlo
  uploadStream.end(imageFile.data)
}

const getImageProductById = async (req, res) => {
  const { imageProductId } = req.params
  try {
    const imageProduct = await ImageProductService.getImageProduct(
      imageProductId
    )
    res.status(200).json(imageProduct)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteImageProduct = async (req, res) => {
  const imageProductId = req.params.ImageProductId
  try {
    const imageProduct = await ImageProductService.deleteImageProduct(
      imageProductId
    )
    res.status(200).json(imageProduct)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const getImageProductsProduct = async (req, res) => {
  const { ImageProductName } = req.params
  try {
    const imageProduct = await ImageProductService.getImageProductsProduct(
      ImageProductName
    )
    res.status(200).json(imageProduct)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
module.exports = {
  createImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  deleteImageProduct,
  getImageProductsProduct
}
