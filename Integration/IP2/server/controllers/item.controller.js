// const mongoose = require('mongoose');
// const Item = mongoose.model('Item');

//this is a cleaner method of accomplshing this above.
const Item = require('mongoose').model('Item');

module.exports = {
//get all of a resource
    index(req, res) {
        Item.find({})
            .then(items => response.json(items))
            .catch(error => console.log(error));
     },

// create resource
    create(req, res) { 
        Item.create(req.body)
            .then(item => reponse.json(item))
            .catch(error => {
                res
                    .status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },

//get single resource
    show(req, res) {
        Item.findById(req.params.item_id)
            .then(item => res.json(item))
            .catch(error => { console.log(error); });
     },

// update a resource
    update(req, res) {
        Item.findByIdAndUpdate(req.params.item_id, req.body, { new: true }) //new object returned if new:true is set
            .then(item => res.json(item))
            .catch(error => console.log(error));  //there are better ways to handle errors. (See the method used in 'create' above)
     },

// destroy a resource
    destroy(req, res) {
        Item.findByIdAndRemove(req.params.item_id)
            .then(item => res.json(item))
            .catch(error => console.log(error));
    },
}
