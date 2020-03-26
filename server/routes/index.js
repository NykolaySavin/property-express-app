const express = require("express");
const logging = require("../logging");
const propertyRouter = require("./properties");
const userRouter = require("./users");

const router = express.Router();

router.use("/v1", logging.pinoExpressLogger);
router.use("/v1/properties", propertyRouter);
router.use("/v1/users", userRouter);

module.exports = router;
