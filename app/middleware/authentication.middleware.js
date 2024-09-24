const passport = require("passport")
const passportJwt = require("passport-jwt")
const { checkAdmins } = require("../providers/userProvider")

const JWTStrategy = passportJwt.Strategy
const ExtractJWT = passportJwt.ExtractJwt
const SECRET = process.env.SESSION_SECRET

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET
    },
    (jwtPayload, done) => {
      const user = jwtPayload
      return done(null, user)
    }
  )
)

const authMW = passport.authenticate("jwt", { session: false })

const authenticatedCheck = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Autentication failed" })
  }
  next()
}

const adminCheck = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Admin credentials required" })
  } else {
    const user = await checkAdmins(req.user.id)

    if (user) {
      return next()
    } else {
      return res.status(401).json({ error: "Admin credentials required" })
    }
  }
}

module.exports = {
  SECRET,
  authMW,
  authenticatedCheck,
  adminCheck
}
