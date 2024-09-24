const formidable = require("formidable")
const { ImageService } = require("../services")

const createImage = async (req, res) => {
  const form = new formidable.IncomingForm()
  console.log("form creado")

  // Configuración para formidable
  form.keepExtensions = true // Mantener la extensión del archivo
  form.maxFileSize = 10 * 1024 * 1024 // Limitar el tamaño del archivo a 10MB

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({ message: "Error parsing the file" })
    }

    // Verificar que el archivo exista
    if (!files || !files.image) {
      return res.status(400).json({ message: "No image file uploaded" })
    }

    const filePath = files.image.filepath // Obtener la ruta del archivo subido
    console.log("por subirse a cloud", filePath)

    // Subir el archivo a Cloudinary
    ImageService.createImage(filePath)
      .then((result) => {
        console.log("funciono la subida a cloudinary")
        return res.json({
          message: "Image uploaded successfully",
          url: result.secure_url
        })
      })
      .catch((error) => {
        console.error("Error uploading image:", error)
        return res
          .status(500)
          .json({ message: "Error uploading image to Cloudinary" })
      })
  })
}

module.exports = { createImage }
