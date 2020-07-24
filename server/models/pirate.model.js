const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {type: String,
        required: [true, "Name is required"]},
    image: {type: String,
        required: [true, "Image Url must be provided"]},
    numChests: {type: Number,
        required: [true, "Number of treasure chests is required"]},
    catchPhrase: {type: String,
        required: [true, "Catch phrase is required"]},
    hasPegLeg: {type: Boolean,
        required: [true, "Has peg leg is required"]},
    hasEyePatch: {type: Boolean,
        required: [true, "Has eye patch is required"]},
    hasHookHand: {type: Boolean,
        required: [true, "Has hook hand is required"]},
    position: {type: String}}, 
    {timestamps: true});

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);