const cookieParser = require("cookie-parser");
const { errors } = require("celebrate");
const cors = require("cors");
const helmet = require("helmet");
const boom = require("express-boom");
const bodyParser = require("body-parser");
var timeout = require("connect-timeout");
const express = require("express");

module.exports = async () => {
  const routes = require("./routes");
  const config = require("./config");
  const db = require("./db");
  function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
  }
  const server = express();

  server.use(timeout("100s"));
  server.use(cookieParser());
  server.use(haltOnTimedout);
  // API POST requests
  server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
  server.use(haltOnTimedout);
  server.use(bodyParser.json({ extended: true, limit: "50mb" }));
  server.use(haltOnTimedout);
  server.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"]
    })
  );
  server.use(haltOnTimedout);
  // App Engine forwards HTTPS
  server.set("trust proxy", true);
  server.use(haltOnTimedout);
  // Attach error response library to res.boom
  server.use(boom());
  server.use(haltOnTimedout);
  // Harden application
  server.use(helmet());
  server.use(haltOnTimedout);
  // Routes
  server.use(routes);

  // Handle errors
  // Celebrate (Joi) Error Handling
  server.use(errors());
  const root = require("path").join(__dirname, "client");
  server.use(express.static(root));

  server.get("/*", (req, res) => {
    res.sendFile("index.html", { root });
  });

  await db.migrate.latest();

  return server;
};
