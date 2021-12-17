const express = require('express')
const router = express.Router()
const fetchShelves = require('../functions/amazonScraper')

router.get('/:searchTerm', (req, res) => {

    const { searchTerm } = req.params

    fetchShelves(searchTerm).then((products) => res.json(products));

})

module.exports = router