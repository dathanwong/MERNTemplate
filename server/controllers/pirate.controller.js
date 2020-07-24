const { Pirate } = require("../models/pirate.model");

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.findAll = (req, res)=>{
    Pirate.find({})
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
    Pirate.findOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(r => res.json(r))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Pirate.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(r => res.json(r))
        .catch(err => res.status(400).json(err));
}