const express = require('express')
const router = express.Router()
const Homodex = require('../models/homodex')

//Getting All
router.get('/', async (req, res) => {
    try {
        const homodex = await Homodex.find()
        res.json(homodex)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting One
router.get('/:number', getHomodex, (req, res) => {
    res.json(res.homodex)
})

//Creating One
router.post('/', async (req, res) => {
    let homodexLength = 0;
    try {
        homodexLength = (await Homodex.find()).length
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    const homodex = new Homodex({
        number: (homodexLength + 1),
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        gender: req.body.gender,
        category: req.body.category,
        abilities: req.body.abilities,
        type: req.body.type,
        weaknesses: req.body.weaknesses,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed
    })

    try {
        const newHomodex = await homodex.save()
        res.status(201).json(newHomodex)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Updating One
router.patch('/:number', getHomodex, async (req, res) => {
    if (req.body.name != null) {
        res.homodex.name = req.body.name    
    }
    if (req.body.height != null) {
        res.homodex.height = req.body.height    
    }
    if (req.body.weight != null) {
        res.homodex.weight = req.body.weight    
    }
    if (req.body.gender != null) {
        res.homodex.gender = req.body.gender    
    }
    if (req.body.category != null) {
        res.homodex.category = req.body.category    
    }
    if (req.body.abilities != null) {
        res.homodex.abilities = req.body.abilities    
    }
    if (req.body.type != null) {
        res.homodex.type = req.body.type    
    }
    if (req.body.weaknesses != null) {
        res.homodex.weaknesses = req.body.weaknesses    
    }
    if (req.body.hp != null) {
        res.homodex.hp = req.body.hp    
    }
    if (req.body.attack != null) {
        res.homodex.attack = req.body.attack    
    }
    if (req.body.defense != null) {
        res.homodex.defense = req.body.defense    
    }
    if (req.body.speed != null) {
        res.homodex.speed = req.body.speed    
    }

    try {
        const updatedHomodexEntry = await res.homodex.save()
        res.json(updatedHomodexEntry)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Deleting One
router.delete('/:number', getHomodex, async (req, res) => {
    try {
        await res.homodex.remove()
        res.json({ message: "Deleted Homodex Entry" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getHomodex(req, res, next) {
    let homodex
    try {
        homodex = await Homodex.findOne({ number: req.params.number})
        if ( homodex == null) {
            return res.status(404).json({ message: "Cannot find Homodex Entry" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.homodex = homodex
    next()
}

module.exports = router
