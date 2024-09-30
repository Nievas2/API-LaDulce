const express = require("express")

const router = express.Router()
const { body } = require("express-validator")
const { ProductController } = require("../controllers")
const {
  authMW,
  adminCheck
} = require("../middleware/authentication.middleware")

router.get("/:page", ProductController.getProducts)

router.get("/name/:name", ProductController.getProductByName)

router.get("/get/:ProductId", ProductController.getProductById)

router.post(
  "/",
  body("name").isString(),
  body("description").isString(),
  body("price").isNumeric(),
  body("CategoryName").isString(),
  authMW,
  adminCheck,
  ProductController.createProduct
)

router.put(
  "/:ProductId",
  body("name").isString(),
  body("description").isString(),
  body("price").isNumeric(),
  body("CategoryName").isString(),
  authMW,
  adminCheck,
  ProductController.updateProduct
)

router.delete(
  "/:ProductId",
  authMW,
  adminCheck,
  ProductController.deleteProduct
)

// export
module.exports = router
