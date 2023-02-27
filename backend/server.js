const express = require("express")
const mongoose = require('mongoose')
//importing routes
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

mongoose.set('strictQuery', true)
require('dotenv').config()
//express app
const app = express()
//middleware
//allows us to send post body to server in post request
app.use(express.json()) 
//this allows us to do something between each request.
// in this case, we console.log() between each request
//prevent CORS ERROR
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,DELETE,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
}) 
//routes 
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)

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


