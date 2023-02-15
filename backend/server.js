const express = require("express")
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

mongoose.set('strictQuery', true)
require('dotenv').config()
//express app
const app = express()
//middleware
//allows us to send post body to server in post request
app.use(express.json()) 
//prevent CORS ERROR
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
//this allows us to do something between each request.
// in this case, we console.log() between each request
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
}) 
//routes 
app.use('/api/workouts', workoutRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(" connected to db and listening on port", port)
    })
}).catch((error) => {
    console.log(error)
})


