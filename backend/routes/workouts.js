const express = require("express")

const { 
    createWorkout, getWorkouts, getWorkout
    } = require('../controllers/workoutController')

const router = express.Router()

//Get all the workout docs
router.get("/", getWorkouts)

// Get a single workout doc
router.get('/:id', getWorkout)

// Create a new workout doc
router.post("/", createWorkout)

// Delete a single workout
router.delete('/:id', (request, response) => {
    response.json({mssg: 'DELETE a single workout'})
})

// Update a single doc
router.patch('/:id', (request, response) => {
    response.json({mssg: 'UPDATE a single workout'})
})
 
module.exports = router