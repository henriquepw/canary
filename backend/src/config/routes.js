module.exports = app => {
    app.route("/users")
        .post(app.api.user.save)
        .get(app.api.user.get);

    app.route("/users/:id")
        .put(app.api.user.save)
        .get(app.api.user.getById);

    /*
    app.route("/rota/das/paradas")
        .metodoREST(caminho_da_função_que_ele_vai_executar)
        .get(caminho_da_função_que_ele_vai_executar_o_metodo_get)
    */
};
