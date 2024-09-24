const express = require("express")
const router = express.Router()
const cloudinary = require("cloudinary").v2
const {
  authMW,
  adminCheck
} = require("../middleware/authentication.middleware")
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})

router.post("/upload", authMW, adminCheck, async (req, res) => {
  try {
    // Verificar si se envió un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No se proporcionó ninguna imagen" })
    }

    // Obtener el archivo del objeto req.files
    const imageFile = req.files.image

    // Subir la imagen a Cloudinary usando un stream
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error("Error al subir a Cloudinary:", error)
        return res.status(500).json({ error: "Error al subir la imagen" })
      }
      res.json({
        message: "Imagen subida exitosamente",
        url: result.secure_url
      })
    })

    // Convertir el archivo a un buffer y subirlo
    uploadStream.end(imageFile.data) // Aquí usamos el buffer directamente
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    res.status(500).json({ error: "Error interno del servidor" })
  }
})

/* router.get("/images/:imageName", ImageController.getImage) */
module.exports = router
