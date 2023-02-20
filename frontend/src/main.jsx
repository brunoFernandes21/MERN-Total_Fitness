import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router}  from "react-router-dom";
import { WorkoutsProvider } from './context/WorkoutContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsProvider>
      <Router>
        <App />
      </Router>
    </WorkoutsProvider>
  </React.StrictMode>,
)
