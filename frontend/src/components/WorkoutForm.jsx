import { useState, useContext } from "react";
//context api
import { WorkoutContext } from '../context/WorkoutContext'
import FormHeader from "./FormHeader";

const WorkoutForm = () => {
  const [ formData, setFormData] = useState({ title: "", load: "", reps: "" });
  const [ isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
  const { workouts, setWorkouts } = useContext(WorkoutContext)
  const [ showForm, setShowForm] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    //post new workout to db
    const response = await fetch("http://localhost:5000/api/workouts", {
      method: "POST",
      headers: { 
        "Content-type": "application/json"
        },
      body: JSON.stringify(formData),
    });
    //store response in data variable
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setIsLoading(false);
    }

    if(response.ok) {
      setError(null)
      setIsLoading(false);
      setWorkouts([data, ...workouts])
      setFormData({ title: "", load: "", reps: "" });
      console.log("New workout added", data)
    }
  };
  const showAddForm = () => {
    setShowForm(!showForm)
  }
  //add for adjust size of form mt-5 mb-60
  return (
    <div className="create rounded-lg text-white p-5">
      <FormHeader onAdd={showAddForm} showForm={showForm}/>
      {showForm && <form>
        <label>Exercise Title </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Load(in kg) </label>
        <input
          type="number"
          name="load"
          value={formData.load}
          onChange={handleChange}
        />
        <label>Reps </label>
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
        />
        {!isLoading && <button onClick={handleSubmit}>Add Workout</button>}
        {isLoading && <button disabled>Adding...</button>}
      </form>}
      {error && (
        <div className='error bg-red-100 mt-5 text-red-700 px-4 py-3 rounded relative" role="alert"'>
          <span className="font-bold">{error}</span>
        </div>
      )}
    </div>
    
  );
};

export default WorkoutForm;
