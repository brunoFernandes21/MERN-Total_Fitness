const express = require("express")
const workoutRoutes = require('./controllers/workouts')
require('dotenv').config()
//express app
const app = express()
//middleware

//allows us to send post body to server in post request
app.use(express.json()) 
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
}) 

//routes 
app.use('/api/workouts', workoutRoutes)

//listen for requests
const port = process.env.PORT
app.listen(port, () => {
    console.log("listening on port", port)
})

