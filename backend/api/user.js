const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
    const { isNotEmpy } = app.api.validator;

    const encryptPass = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const save = async (req, res) => {
        console.log("Save");

        const user = { ...req.body };

        if (req.params.id) user.id = req.params.id;

        try {
            if (!user.id) {
                const userFromDB = await app
                    .db("tb_user")
                    .where({ email: user.email })
                    .first();

                isNotEmpy(userFromDB, "Usuário já estava cadastrado");
            }
        } catch (msg) {
            return res.status(400).send(msg);
        }

        user.password = encryptPass(user.password);

        if (user.id) {
            app.db("tb_user")
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send("Atualizado com sucesso"))
                .catch(err => res.status(500).send(err));
        } else {
            app.db("tb_user")
                .insert(user)
                .then(_ => res.status(204).send("Cadastrado com sucesso"))
                .catch(err => res.status(500).send(err));
        }
    };

    const remove = (req, res) => {
        app.db("tb_user")
            .delete()
            .where({ id: req.params.id })
            .then(_ => res.status(204).send("Conta excluidada com sucesso"))
            .catch(err => res.status(500).send(err));
    };

    const get = (_, res) => {
        app.db("tb_user")
            .select("id", "name", "email")
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    };

    const getById = (req, res) => {
        app.db("tb_user")
            .select("id", "name", "email")
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err));
    };

    return {
        save,
        remove,
        get,
        getById
    };
};
