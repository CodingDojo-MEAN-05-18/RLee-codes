const pokemon = require('../controllers/pokemon');

module.exports = (app) => {

    app.get("/", (req, res) =>{
        pokemon.index(req, res);
    });

    app.get("/pokemon/:id", (req, res) => {
        pokemon.oneMon(req, res);
    });

};