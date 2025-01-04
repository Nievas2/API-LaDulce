require("dotenv").config()
const fileUpload = require("express-fileupload")
// eslint-disable-next-line import/no-extraneous-dependencies
const rateLimit = require("express-rate-limit")
// Express Dependencies:
const express = require("express")
// Sanitizacion XSS
const xss = require("xss-clean")
// Custom Dependencies:
const helmet = require("helmet")
const session = require("express-session")
// Winston logger Dependencies
const cors = require("cors")
const logger = require("./utils/winston.logger")

// Models:
const models = require("./models")

// Rutes:
const routes = require("./routes")

const config = require("./config/config")
const validateEnv = require("./utils/validateEnv")

const app = express()
app.use(fileUpload())
validateEnv.validate()
app.use(helmet())
app.use(helmet.ieNoOpen())
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000
app.use(
  helmet.hsts({
    maxAge: sixtyDaysInSeconds,
  })
)
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff())
app.use(helmet.frameguard({ action: "deny" }))

app.use(xss())
// Sets cookies security settings
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: "strict",
    secure: true,
  },
}
if (config.environment === "production") {
  app.set("trust proxy", 1) // trust first proxy
}
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})
// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use(session(sess))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
    limit: "10kb",
    parameterLimit: 10,
  })
)

// Cors configuration
const whitelist = process.env.CORS.split(" ")
const corsOptions = {
  origin(origin, callback) {
    if (whitelist[0] === origin /* true */) {
      callback(null, true)
    } else {
      logger.api.error("Not allowed by CORS", { origin })
      callback(new Error("Not allowed by CORS"))
    }
  },
}
app.use(cors(corsOptions))

if (config.environment === "production") {
  app.set("trust proxy", 1) // trust first proxy
}

models.sequelize
  .authenticate()
  .then(() => {
    logger.api.debug("Conexión con la Base de Datos: EXITOSA")
  })
  .catch((err) => {
    logger.api.error("Conexión con la Base de Datos: FALLIDA")
    logger.api.error(err)
  })

app.use("/", routes)
module.exports = app
