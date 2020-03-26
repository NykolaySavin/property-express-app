const secretSync = require("./config/secretSync");

(async () => {
  console.log("Loading local .env");
  secretSync.loadEnv();
  const logging = require("./logging");
  const config = require("./config");
  const getServer = require("./getServer");

  const server = await getServer();
  const startedServer = server.listen(config.get("port"), () => {
    const { port } = startedServer.address();
    logging.logger.info(`Spot Estate Web Service listening on port ${port}`);
  });
})();
