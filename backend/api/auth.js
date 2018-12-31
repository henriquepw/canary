const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
    const signin = async (req, res) => {
        const user = await app
            .db("tb_user")
            .where({ email: req.body.email })
            .first();

        if (!user) {
            return res.status(400).send("Usuário não encontrado");
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).send("Email e/ou Senha invalido(s)");
        }

        const now = Math.floor(Date.now() / 1000);

        delete user.password;
        const payload = {
            ...user,
            iat: now,
            exp: now + 60 * 60 * 24
        };

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        });
    };

    const validateToken = async (req, res) => {
        const userData = req.body || null;

        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret);
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true);
                }
            }
        } catch (e) {
            // problema com o token
            res.send(false);
        }
    };

    return {
        signin,
        validateToken
    };
};
