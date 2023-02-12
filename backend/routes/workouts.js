const express = require("express")

const { 
    createWorkout, 
    getWorkouts, 
    getWorkout, 
    deleteWorkout,
    updateWorkout
    } = require('../controllers/workoutController')

const router = express.Router()

//Get all the workout docs
router.get("/", getWorkouts)

// Get a single workout doc
router.get('/:id', getWorkout)

// Create a new workout doc
router.post("/", createWorkout)

// Delete a single workout
router.delete('/:id', deleteWorkout)

// Update a single doc
router.patch('/:id', updateWorkout)
 
module.exports = router