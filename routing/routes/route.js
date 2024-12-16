const express = require('express')
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Goodnight mitron....")
})

router.post('/items', (req, res) =>{
    res.send("Got a post request from the buddy")
})

router.put('/items/:id', (req, res) => {
    res.send("Got a Put request");
})
router.delete('/items/:id', (req, res) => {
    res.send("Got a delete request");
})

module.exports = router 