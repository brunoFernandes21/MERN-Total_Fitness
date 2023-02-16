import { useState, useEffect, useContext } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

//context api
import { WorkoutContext } from '../context/WorkoutContext'

const Home = () => {

  const { workouts, setWorkouts } = useContext(WorkoutContext)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  //fetch all workouts when page loads up
  useEffect(() => {
     const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/api/workouts')
      const data = await response.json()
      if(response.ok) {
        setWorkouts(data)
        setIsLoading(false)
      }
     }
     fetchWorkouts()
  },[])

  //deleting a workout
  const deleteWorkout = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/workouts/${id}`, {
        method: 'DELETE'
      })
      if(response.ok) {
        const filteredWorkouts = workouts.filter((workout) => {
          return workout._id !== id
        })
        setWorkouts(filteredWorkouts)
        console.log(`Workout with id: ${id} has been deleted`)
      }
      
    } catch (error) {
      setError(error.message)
    }

  }
  //display workoutDetails component 
  //which is a single workout object
  const allWorkouts = workouts.map((workout) => (
    <WorkoutDetails 
    key={workout._id} 
    workout={workout} 
    onDelete={deleteWorkout}
    />
  ))

  

  return (
    <div className='home'>
      <div className="workouts">
      {!isLoading && allWorkouts}
      {isLoading && <h1>Loading...</h1>}
      </div>
      <div className="workout__form sticky top-28 self-start mt-5 hover:shadow-xl">
        <WorkoutForm/>
      </div>
      
    </div>
  )
}

export default Home