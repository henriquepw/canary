module.exports = app => {
    const insert = (req, res) => {
        canary = { ...req.body };

        app.db("tb_canary")
            .insert(canary)
            .then(_ => res.status(204).send("Cadastrado com sucesso"))
            .catch(err => res.status(500).send(err));
    };

    const update = (req, res) => {
        canary = { ...req.body };

        app.db("tb_canary")
            .update(canary)
            .where({ id: canary.id })
            .then(_ => res.status(204).send("Atualizado com sucesso"))
            .catch(err => res.status(500).send(err));
    };

    const remove = (req, res) => {
        app.db("tb_canary")
            .delete()
            .whare({ id: req.params.id })
            .then(_ => res.status(204).send("Deletado com sucesso"))
            .catch(err => res.status(500).send(err));
    };

    const get = (_, res) => {
        app.db("tb_canary")
            .select()
            .then(canaries => res.json(canaries))
            .catch(err => res.status(500).send(err));
    };

    const getById = (req, res) => {
        app.db("tb_canary")
            .select()
            .whare({ id: req.params.id })
            .then(canaries => res.json(canaries))
            .catch(err => res.status(500).send(err));
    };

    return {
        insert,
        update,
        remove,
        get,
        getById
    };
};
