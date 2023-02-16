import { FaRegTrashAlt} from 'react-icons/fa'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout, onDelete }) => {
  const { title, load, reps, createdAt } = workout
  return (
    <div className='workout__details'>
      <h3>{title}</h3>
      <span className="delete">
      <FaRegTrashAlt onClick={()=> onDelete(workout._id)} style={{color: 'red'}}/>
      </span>
      <div className="grid gap-2 mt-4">
      <p><strong>Load: </strong>{load}kg</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p><strong>Added: </strong>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
      </div>
    </div>
  )
}

export default WorkoutDetails