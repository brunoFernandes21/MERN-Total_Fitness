const express = require("express")

const router = express.Router()

//Get all the workout docs
router.get("/", (request, response) => {
    response.json({mssg: "GET all workouts"})
})

// Get a single workout doc
router.get('/:id', (request, response) => {
    response.json({mssg: 'GET a single workout'})
})

// Create a new workout doc
router.post("/", (request, response) => {
    response.json({mssg: 'POST a new workout'})
})

// Delete a single workout
router.delete('/:id', (request, response) => {
    response.json({mssg: 'DELETE a single workout'})
})

// Update a single doc
router.patch('/:id', (request, response) => {
    response.json({mssg: 'UPDATE a single workout'})
})


module.exports = router