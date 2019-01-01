module.exports = app => {
    app.post("/signup", app.api.user.save);
    app.post("/signin", app.api.auth.signin);
    app.post("/validateToken", app.api.auth.validateToken);

    /********
     * User *
     ********/
    app.route("/users")
        //.all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get);

    app.route("/users/:id")
        //.all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove);

    /**********
     * canary *
     **********/
    app.route("./canaries")
        //.all(app.config.passport.authenticate())
        .post(app.api.canary.insert)
        .get(app.api.canary.get);

    app.route("./canaries/:id")
        //.all(app.config.passport.authenticate())
        .put(app.api.canary.update)
        .get(app.api.canary.getById)
        .delete(app.api.canary.remove);

    /***************
     * user_canary *
     ***************/

    /*
    app.route("/rota/das/paradas")
    .metodoREST(caminho_da_função_que_ele_vai_executar)
    .get(caminho_da_função_que_ele_vai_executar_o_metodo_get)
    */
};
