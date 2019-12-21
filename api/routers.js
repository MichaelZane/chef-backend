// LoginRouter
const loginRouter = require("../endpoints/login/loginRouter.js");

module.exports = server => {
  server.use("/api/auth/login", loginRouter);
};
