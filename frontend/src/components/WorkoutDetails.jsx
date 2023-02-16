import { FaRegTrashAlt} from 'react-icons/fa'

const WorkoutDetails = ({ workout }) => {
  const { title, load, reps, createdAt } = workout
  return (
    <div className='workout__details'>
      <h3>{title}</h3>
      <FaRegTrashAlt className='delete' style={{color: 'red'}}/>
      <div className="grid gap-2 mt-4">
      <p><strong>Load: </strong>{load}kg</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p><strong>Date: </strong>{createdAt}</p>
      </div>
    </div>
  )
}

export default WorkoutDetails