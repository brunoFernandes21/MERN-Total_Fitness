import React from 'react'

const WorkoutDetails = ({ workout }) => {
    const { title, load, reps, createdAt } = workout
  return (
    <div className='workout__details'>
        <h3>{title}</h3>
        <p><strong>Load(kg): </strong>{load}</p>
        <p><strong>Reps: </strong>{reps}</p>
        <p>{createdAt}</p>
    </div>
  )
}

export default WorkoutDetails