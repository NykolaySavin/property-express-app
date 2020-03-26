const path = require("path");

// Use same app config file (this file can be called outside of the app context for migrations)
const config = require("./config");

// Dynamic migration options
exports[config.get("env")] = {
  client: "pg",
  connection: {
    user: config.get("db.user"),
    password: config.get("db.pass"),
    database: config.get("db.name"),
    host: config.get("db.host"),
    ssl: false
  },
  pool: {
    min: config.isProd ? 2 : 1,
    max: config.isProd ? 10 : 3
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.normalize(path.join(__dirname, "/migrations"))
  }
};

/*

  // 'max' limits the total number of concurrent connections this pool will keep. Ideal
  // values for this setting are highly variable on app design, infrastructure, and database.
  knex.client.pool.max = 20;
  // 'min' is the minimum number of idle connections Knex maintains in the pool.
  // Additional connections will be established to meet this value unless the pool is full.
  knex.client.pool.min = 3;
  
  // 'acquireTimeoutMillis' is the maximum number of milliseconds to wait for a connection checkout.
  // Any attempt to retrieve a connection from this pool that exceeds the set limit will throw an
  // SQLException.
  knex.client.pool.createTimeoutMillis = 30000; // 30 seconds
  // 'idleTimeoutMillis' is the maximum amount of time a connection can sit in the pool. Connections that
  // sit idle for this many milliseconds are retried if idleTimeoutMillis is exceeded.
  knex.client.pool.idleTimeoutMillis = 600000; // 10 minutes
  // 'createRetryIntervalMillis' is how long to idle after failed connection creation before trying again
  knex.client.pool.createRetryIntervalMillis = 200; // 0.2 seconds
  // 'acquireTimeoutMillis' is the maximum possible lifetime of a connection in the pool. Connections that
  // live longer than this many milliseconds will be closed and reestablished between uses. This
  // value should be several minutes shorter than the database's timeout value to avoid unexpected
  // terminations.
  knex.client.pool.acquireTimeoutMillis = 600000; // 10 minutes

*/
