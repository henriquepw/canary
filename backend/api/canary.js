module.exports = app => {
    const insert = (req, res) => {
        console.log("insert");

        canary = { ...req.body };

        const register = id => {
            console.log("register");

            const user_canary = {
                user_id: canary.owner_id,
                canary_id: id[0]
            };

            console.log(user_canary);

            app.db("tb_user_canary")
                .insert(user_canary)
                .then(_ =>
                    res.status(204).send("Canary registrado com sucesso")
                )
                .catch(err => res.status(500).send(err));
        };

        app.db("tb_canary")
            .insert(canary)
            .returning("id")
            .then(id => register(id))
            .catch(err => res.status(500).send(err));
    };

    const update = (req, res) => {
        console.log("Canary - Update");
        canary = { ...req.body };
        console.log(canary);

        app.db("tb_canary")
            .update(canary)
            .where({ id: canary.id || req.params.id })
            .then(_ => {
                console.log("then");
                res.status(204).send("Atualizado com sucesso");
            })
            .catch(err => {
                console.log("catch");
                res.status(500).send(err);
            });
    };

    const remove = (req, res) => {
        app.db("tb_canary")
            .delete()
            .where({ id: req.params.id })
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
            .where({ id: req.params.id })
            .then(canaries => res.json(canaries))
            .catch(err => res.status(500).send(err));
    };

    const getByUserId = (req, res) => {
        app.db("tb_canary")
            .select()
            .whereRaw(
                `id in (
                    SELECT canary_id 
                    FROM tb_user_canary
                    WHERE user_id = ${req.params.id}) `
            )
            .then(canaries => res.json(canaries))
            .catch(err => res.status(500).send(err));
    };

    const getByOwnerId = (req, res) => {
        app.db("tb_canary")
            .select()
            .where({ owner_id: req.params.id })
            .then(canaries => res.json(canaries))
            .catch(err => res.status(500).send(err));
    };

    return {
        insert,
        update,
        remove,
        get,
        getById,
        getByUserId,
        getByOwnerId
    };
};
