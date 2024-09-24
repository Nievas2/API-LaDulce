const axios = require("axios")
const fs = require("fs")

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`
const CLOUDINARY_API_KEY = process.env.api_key
const CLOUDINARY_API_SECRET = process.env.api_secret

const createImage = async (filePath) => {
  const form = new FormData()
  form.append("file", fs.createReadStream(filePath)) // Archivo que vamos a subir
  form.append("upload_preset", "ml_default") // Si tienes un preset, cámbialo si es necesario

  try {
    const response = await axios.post(CLOUDINARY_UPLOAD_URL, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Basic ${Buffer.from(
          `${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`
        ).toString("base64")}`
      }
    })
    return response.data
  } catch (error) {
    throw error
  }
}
module.exports = { createImage }
