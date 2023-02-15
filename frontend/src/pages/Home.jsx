import { useState, useEffect } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

  const [ workouts, setWorkouts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

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
  
  const allWorkouts = workouts.map((workout) => (
    <WorkoutDetails key={workout._id} workout={workout}/>
  ))
  // console.log(allWorkouts)
  return (
    <div className='home'>
      <div className="workouts">
      {!isLoading && allWorkouts}
      {isLoading && <h1>Loading</h1>}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home