const mongoose = require('mongoose')

const homodexSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    abilities: {
        type: [String],
        required: false
    },
    type: {
        type: [String],
        required: true
    },
    weaknesses: {
        type: [String],
        required: false
    },
    hp: {
        type: Number,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Homodex', homodexSchema)