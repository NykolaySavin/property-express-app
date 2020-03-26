const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const appRoot = path.dirname(
  require.main.filename || process.mainModule.filename
);

function loadEnv() {
  dotenv.config();
}

module.exports = {
  hasEnv: fs.existsSync(`${appRoot}/.env`),
  loadEnv
};
