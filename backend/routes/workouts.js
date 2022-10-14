const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// GET all Workouts..!
router.get('/',getWorkouts);
// router.get('/',(req,res) => {
//     res.json({mssg : 'GET all workouts.'});
// })

// GET a single Workout
router.get('/:id',getworkout);
// router.get('/:id',(req,res) => {
//     res.json({mssg : 'GET single Workout'});
// })

// POST a new Workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id',deleteWorkout);
// router.delete('/:id',(req,res) => {
//     res.json({mssg : "DELETE a Workout"});
// })

// UPDATE a workout
router.patch('/:id',updateWorkout);
// router.patch('/:id',(req,res) => {
//     res.json({mssg : "UPDATE a Workout"});
// })

module.exports = router;