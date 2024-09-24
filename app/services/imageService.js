const { ImageProvider } = require("../providers")

const createImage = async (filePath) => {
  return await ImageProvider.createimage(filePath)
}

module.exports = { createImage }
