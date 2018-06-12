const pokemon = require('../controllers/pokemon');

module.exports = (app) => {

    app.get("/", (req, res) =>{
        pokemon.index(req, res);
    });

};