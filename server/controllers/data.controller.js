const { Data } = require("../models/data.model");
const TrieSearch = require('trie-search');

//Initialize Trie to save time
var ts = new TrieSearch('name');
initTrie();


function initTrie(){
    ts.reset();
    Data.find({})
    .then(results =>{
        ts.addAll(results);
    } )
    .catch(err => console.log(err));
}

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.findAll = (req, res)=>{
    Data.find({})
        .then(results => res.json(results))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
    Data.findOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    Data.create(req.body)
        .then(result =>{
            ts.add(req.body);
            res.json(result);
        } )
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
    Data.deleteOne({_id: req.params.id})
        .then(result =>{
            initTrie();
            res.json(result);
        } )
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Data.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(result =>{
            initTrie()
            res.json(result);
        })
        .catch(err => res.status(400).json(err));
}

module.exports.getSuggestions = (req, res) =>{
    const results = ts.get(req.body.search);
    console.log(req.body);
    console.log(results);
    res.json(results);
}