import { createContext, useState } from "react";

export const WorkoutContext = createContext()

export const WorkoutsProvider = ({ children }) => {
    const [workouts, setWorkouts ] = useState([])

    return (
        <WorkoutContext.Provider value={{workouts, setWorkouts}}>
            {children}
        </WorkoutContext.Provider>
    )
}