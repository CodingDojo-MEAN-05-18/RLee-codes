module.exports = {

    index : function(req, res){
        console.log("This is coming from pokemon.js");
        let data = {
            message1:   "This is coming from pokemon.js via 'data' and res.json",
            message2: "goto /pokemon/:id to retrieve a pokemon and associated, parsed data."
        };
        res.json(data);
    },

    oneMon : (req, res) => {
        let mon = req.params.id;
        res.json(mon);
    },

};