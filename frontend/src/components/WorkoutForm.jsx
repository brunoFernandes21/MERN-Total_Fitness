import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
  const [formData, setFormData] = useState({ title: "", load: "", reps: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//   const navigate = useNavigate();

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

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      }
      if(response.ok) {
        setError(null)
        setIsLoading(false);
        setFormData({ title: "", load: "", reps: "" });
        console.log("New workout added", data)
        // navigate('/');
      }
  };

  return (
    <div className=" sticky rounded-lg shadow-md text-black w-full bg-white p-5 mt-5 mb-60">
      {error && (
        <div className='bg-red-100 border mb-5 border-red-900 text-red-700 px-4 py-3 rounded relative" role="alert"'>
          <span className="font-bold">{error}</span>
        </div>
      )}
      <form className="create border-2">
      <h3 className="text-center">Add a New Workout</h3>
      <label>Exercise Title: </label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Load(in kg): </label>
      <input
        type="number"
        name="load"
        value={formData.load}
        onChange={handleChange}
      />
      <label>Reps: </label>
      <input
        type="number"
        name="reps"
        value={formData.reps}
        onChange={handleChange}
      />
      {!isLoading && <button onClick={handleSubmit}>Add Workout</button>}
      {isLoading && <button disabled>Adding...</button>}
    </form>
    </div>
    
  );
};

export default WorkoutForm;
