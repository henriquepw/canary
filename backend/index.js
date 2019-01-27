const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

const CronJob = require("cron").CronJob;

const { log } = console;

const insertDaily = async () => {
    const readings = await db("tb_canary").select(
        "nh3",
        "co2",
        "co",
        "temperature",
        "humity",
        "id as canary_id"
    );

    readings.forEach(element => {
        log(element);
    });

    db("tb_daily_reading")
        .insert(readings)
        .then(_ => log("then"));
};

const job = new CronJob("* * 12 * * *", insertDaily);

//job.start();

PORT = 3000;
app.db = db;

consign()
    .include("./config/passport.js")
    .then("./config/middlewares.js")
    .then("./api/validator.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app);

app.listen(PORT, () => {
    log(`Canary server started on port ${PORT}`);
});
