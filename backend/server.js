require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    app.listen(process.env.PORT, () => {
      console.log(`listening for requests on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const workOutRoutes = require("./routes/workouts");

// // express app
// const app = express();

// //middleware
// app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// // routes
// app.use("/api/workouts", workOutRoutes);
// // app.get("/", (req, res) => {
// //   // res.send("<h1>Hello Bhailog..!</h1>")
// //   res.json({ mssg: "Welcome to the app"});
// // });

// // Connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`Connected to db..! & listening on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // listen for requests
// // app.listen(process.env.PORT, () => {
// //   console.log(`listening on port ${process.env.PORT}`);
// // });
