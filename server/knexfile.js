const { db } = require("./.env");

module.exports = {
  client: "pg",
  connection: db
};
