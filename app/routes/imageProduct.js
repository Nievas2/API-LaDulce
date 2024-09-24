const express = require("express")

const router = express.Router()
const { ImageProductController } = require("../controllers")
const {
  authMW,
  adminCheck
} = require("../middleware/authentication.middleware")

router.get("/", ImageProductController.getImageProducts)
router.get("/:ImageProductId", ImageProductController.getImageProductById)
router.get(
  "/product/:ImageProductName",
  ImageProductController.getImageProductsProduct
)
router.post(
  "/add/:ImageProductId",
  authMW,
  adminCheck,
  ImageProductController.createImageProduct
)

router.put(
  "/edit/:ImageProductId",
  authMW,
  adminCheck,
  ImageProductController.updateImageProduct
)

router.delete(
  "/:ImageProductId",
  authMW,
  adminCheck,
  ImageProductController.deleteImageProduct
)

module.exports = router
