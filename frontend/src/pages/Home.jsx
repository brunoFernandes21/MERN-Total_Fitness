import { useState, useEffect, useContext } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

//context api
import { WorkoutContext } from '../context/WorkoutContext'

const Home = () => {

  const { workouts, setWorkouts } = useContext(WorkoutContext)
  const [isLoading, setIsLoading] = useState(false);


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
      {isLoading && <h1>Loading...</h1>}
      </div>
      <div className="sticky top-28 self-start mt-5 hover:shadow-xl">
        <WorkoutForm/>
      </div>
      
    </div>
  )
}

export default Home