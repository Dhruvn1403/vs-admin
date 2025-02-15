import path from "path";

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        ca: path.join(__dirname, "..", "..", "config", "certs", "ca.pem"),
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    },
  },
});
