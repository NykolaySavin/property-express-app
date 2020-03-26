const convict = require("convict");

// Define config schema
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
    required: true
  },
  isProd: {
    doc: "Boolean for is we are in production",
    format: Boolean,
    default: true,
    required: true
  },
  log_level: {
    doc: "The Log Level",
    format: ["DEBUG", "INFO", "ERROR"],
    default: "INFO",
    env: "LOG_LEVEL"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port"
  },
  db: {
    user: {
      doc: "Cloud SQL user",
      format: "*",
      env: "DB_USER",
      required: true,
      default: "?"
    },
    pass: {
      doc: "Cloud SQL password",
      format: "*",
      env: "DB_PASS",
      required: true,
      sensitive: true,
      default: "?"
    },
    name: {
      doc: "Cloud SQL database name",
      format: "*",
      env: "DB_NAME",
      required: true,
      default: "?"
    },
    host: {
      doc: "SQL host",
      format: "*",
      env: "DB_HOST",
      required: true,
      default: "?"
    }
  },
  // email: {
  //   host: {
  //     doc: "Mail server Host",
  //     format: '*',
  //     env: "MAIL_HOST",
  //     required: true,
  //     default: 'smtp.applikation.com',
  //   },
  //   port: {
  //     doc: "Mail server Port",
  //     format: '*',
  //     env: "MAIL_PORT",
  //     required: true,
  //     default: '5464',
  //   },
  //   secure: {
  //     doc: 'Mail server is Secure mode',
  //     format: Boolean,
  //     default: false,
  //     required: true,
  //   },
  //   user: {
  //     doc: "Mail server Username",
  //     format: "*",
  //     env: "MAIL_USER",
  //     required: true,
  //     sensitive: true,
  //     default: '?'
  //   },
  //   pass: {
  //     doc: "Mail server Password",
  //     format: "*",
  //     env: "MAIL_PASS",
  //     required: true,
  //     sensitive: true,
  //     default: '?'
  //   }
  // },
  braintree: {
    merchant_id: {
      doc: "Braintree Merchant ID",
      format: "*",
      env: "BRAINTREE_MERCHANT_ID",
      required: true,
      default: "?"
    },
    environment: {
      doc: "Braintree Environment",
      format: "*",
      env: "BRAINTREE_ENVIRONMENT",
      default: "Sandbox"
    },
    public_key: {
      doc: "Braintree Public Key",
      format: "*",
      env: "BRAINTREE_PUBLIC_KEY",
      required: true,
      default: "?"
    },
    private_key: {
      doc: "Braintree Private Key",
      format: "*",
      env: "BRAINTREE_PRIVATE_KEY",
      required: true,
      sensitive: true,
      default: "?"
    }
  },
  email: {
    sandbox: {
      doc: 'App running in sandbox mode, mailjet will fake delivery',
      format: Boolean,
      env: "MAIL_SANDBOX",
      default: true,
    },
    // sendInStaging: {
    //   doc: 'App running in staging mode should attempt to send email',
    //   format: Boolean,
    //   env: "MAIL_SEND_STAGING",
    //   default: true,
    // },
    mj_public_key: {
      doc: "Mailjet public key",
      format: '*',
      env: "MJ_APIKEY_PUBLIC",
      required: true,
      default: '?',
    },
    mj_private_key: {
      doc: "Mailjet private key",
      format: '*',
      env: "MJ_APIKEY_PRIVATE",
      required: true,
      default: '?',
    }
  },
  firebase: {
    project_id: {
      doc: "Firebase Project ID",
      format: "*",
      env: "FIREBASE_PROJECT_ID",
      required: true,
      default: "?"
    },
    private_key_id: {
      doc: "Firebase Private Key ID",
      format: "*",
      env: "FIREBASE_PRIVATE_KEY_ID",
      required: true,
      sensitive: true,
      default: "?"
    },
    private_key: {
      doc: "Firebase Private Key",
      format: "*",
      env: "FIREBASE_PRIVATE_KEY",
      required: true,
      sensitive: true,
      default: "?"
    },
    client_email: {
      doc: "Firebase CLIENT EMAIL",
      format: "*",
      env: "FIREBASE_CLIENT_EMAIL",
      required: true,
      sensitive: true,
      default: "?"
    },
    client_id: {
      doc: "Firebase CLIENT ID",
      format: "*",
      env: "FIREBASE_CLIENT_ID",
      required: true,
      sensitive: true,
      default: "?"
    },
    client_cert_url: {
      doc: "Firebase CLIENT CERT URL",
      format: "*",
      env: "FIREBASE_CLIENT_CERT_URL",
      required: true,
      sensitive: true,
      default: "?"
    }
  },

  cloud_bucket: {
    doc: "Cloud Bucket Name",
    format: "*",
    env: "BUCKET_NAME",
    required: true,
    sensitive: true,
    default: "?"
  }
});

config.load({
  isProd: config.get("env") === "production"
});

// Perform validation
config.validate();

module.exports = config;
