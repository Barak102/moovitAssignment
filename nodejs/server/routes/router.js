registerRouter = require('../controllers/register');

const load = (app) => {
  app.use('/register', registerRouter);
};
module.exports.load = load;
