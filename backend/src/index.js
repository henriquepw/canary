const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

PORT = 3000;
app.db = db;

consign()
    .then("./config/middlewares.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app);

app.listen(PORT, () => {
    console.log(`Canary server started on port ${PORT}`);
});
