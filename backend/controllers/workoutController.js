//import workout model
const Workout = require("../models/workoutModel");
const { ObjectId } = require("mongodb");

// GET ALL WORKOUTS
const getWorkouts = async (request, response) => {
  //fetch all docs, sort in ascending order
  //and store in variable workouts
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  //send workouts to cliend as json docs
  response.status(200).json(workouts);
};

//GET SINGLE WORKOUTS
const getWorkout = async (request, response) => {
  // fetch id from the route parameter
  const { id } = request.params;
  //check if route param id is a valid id 
  if(ObjectId.isValid(id)) {
    //if so, find doc with corresponding id
    const workout = await Workout.findById(id);
    //check it such doc exists 
    if (!workout) {
      return response.status(404).json({ error: "No such doc" });
    }
    response.status(200).json(workout);
  } else {
    response.status(404).json({ error: "Could not fetch document" });
  }
}
//CREATE NEW WORKOUT
const createWorkout = async (request, response) => {
  const { title, load, reps } = request.body;
  //add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    response.status(200).json(workout);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
//DELETE A WORKOUT
const deleteWorkout = async (request, response) => {
  // fetch id from the route parameter
  const { id } = request.params
  //check if id from route param is valid
  if(ObjectId.isValid(id)) {
    // if so, find doc with this id and delete it and store response in workout variable
    const workout = await Workout.findOneAndDelete({_id: id })
    // if such doc with the id does not exists, resturn error below
    if(!workout) {
      return response.status(404).json({error: "No such doc"})
    }
    //if such doc with the id exists, return doc 
    response.status(200).json(workout)
    console.log('Doc deleted successfully')
  } else {
    //if id is not valid, throw this error
    response.status(404).json({error: "Could not delete doc"})
  }
}
//UPDATE A WORKOUT
const updateWorkout = async (request, response) => {
  // fetch id from the route parameter
  const { id } = request.params 
    //check if id from route param is valid
  if(ObjectId.isValid(id)) {
    // if so, find doc with this id and update it 
    const workout = await Workout.findOneAndUpdate({ _id: id}, {
      ...request.body
    })
    // if such doc with the id does not exists, resturn error below
    if(!workout) {
      return response.status(404).json({error: "No such doc"})
    }
    //if such doc with the id exists, return doc 
    response.status(200).json(workout)
    console.log('Doc updated successfully')
  } else {
    //if id is not valid, throw this error
    response.status(404).json({error: "Could not delete doc"})
  }
}

//export variables
module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
};
