module.exports = app => {
  const insert = (req, res) => {
    reading = { ...req.body };
    reading.iat = Date.now();

    app
      .db("tb_daily_reading")
      .insert(reading)
      .then(_ => res.status(204).send("Leitura inserida com sucesso"))
      .catch(err => res.status(500).send(err));
  };

  const removeByCanaryId = (req, res) => {
    app
      .db("tb_daily_reading")
      .delete()
      .where({ canary_id: req.params.canary_id })
      .then(_ => res.status(204).send("Leituras deletadas com sucesso"))
      .catch(err => res.status(500).send(err));
  };

  const get = (_, res) => {
    app
      .db("tb_daily_reading")
      .select()
      .then(readings => res.json(readings))
      .catch(err => res.status(500).send(err));
  };

  const getByCanaryId = (req, res) => {
    app
      .db("tb_daily_reading")
      .select()
      .where({ canary_id: req.params.canary_id })
      .then(readings => res.json(readings))
      .catch(err => res.status(500).send(err));
  };

  return {
    insert,
    removeByCanaryId,
    get,
    getByCanaryId
  };
};
