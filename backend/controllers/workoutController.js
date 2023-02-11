//import workout model
const Workout = require("../models/workoutModel");
const { ObjectId } = require("mongodb");

// GET ALL WORKOUTS
const getWorkouts = async (request, response) => {
  //fetch all docs, sort in ascending order
  //and store in variable workouts
  const workouts = await Workout.find({}).sort({ createAt: -1 });
  //send workouts to cliend as json docs
  response.status(200).json(workouts);
};

//GET SINGLE WORKOUTS
const getWorkout = async (request, response) => {
  const { id } = request.params;
  if(ObjectId.isValid(id)) {
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

//UPDATE A WORKOUT

//export variables
module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};
