const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const { authMW, adminCheck } = require('../middleware/authentication.middleware');

const app = Express();

const userRouter = require('./userRouter');
const authRouter = require('./authenticationRouter');
const categoryRouter = require('./category');
const productRouter = require('./product')

// use=
app.use('/ping', authMW, adminCheck, (req, res) => {
  res.json({
    response: 'pong!',
  });
});

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
// endpoints arriba de esta linea
app.use('/', rootPath.handler);

app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
