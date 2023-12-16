const fs = require('fs');
const path = require('path');
const express = require('express');
const upload = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No se ha subido ningún archivo.");
  }

  // El nombre del campo en la solicitud es "image"
  let image = req.files.image;
  // Mueve el archivo a un directorio donde desees almacenar las imágenes
  image.mv("save/image/" + Date.now() + "-" + image.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send("Imagen subida correctamente!");
  });
};
const getImages= ((req, res) => {
    const directoryPath = path.join(__dirname,  '..', 'save', 'image');
    fs.readdir(directoryPath, (err, files) => {
      // Manejo de errores
      if (err) {
        return res.status(500).send('Error al obtener las imágenes');
      }
  
      // Devolver la lista de imágenes
      res.send(files);
    });
  });
 /*  const getImage2 = (express.static(path.join(__dirname,'..', 'save', 'image')));
 */
  const getImage2 = ((req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname,'..', 'save', 'image', imageName);
    res.sendFile(imagePath);
  });


  const deleteCarousel= ((req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname,'..', 'save', 'image', imageName);
    console.log(imagePath)
    console.log(fs.existsSync(imagePath))
    // Verifica si el archivo existe antes de intentar eliminarlo
    if (fs.existsSync(imagePath)) {
      // Elimina el archivo del sistema de archivos
      fs.unlink(imagePath, (err) => {
        if (err) {
          return res.status(500).send('Error al eliminar la imagen');
        }
        res.send('Imagen eliminada correctamente');
      });
    } else {
      res.status(404).send('La imagen no existe');
    }
  });
module.exports = { upload, getImages, getImage2,deleteCarousel};
