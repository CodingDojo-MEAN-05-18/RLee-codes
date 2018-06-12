module.exports = {

    index : function(req, res){
        console.log("This is coming from pokemon.js");
        let data = "This is coming from pokemon.js via 'data' and res.json";
        res.json({data: data});
    },

    oneMon : (req, res) => {
        let mon = req.params.id;
        res.json(mon);
    },

};