const router = require("express").Router();
const Workout = require("../models/workout.js");

//post route to create new workout
router.post("/workouts", ({body}, res) => {
Workout.create({})
.then(dbWorkout => {
    console.log(`post: ${dbWorkout}`)
    res.json(dbWorkout);
})
.catch(err => {
    res.status(400).json(err);
});
});

//get route to find all workouts in db
router.get("/workouts", (req, res) => {
Workout.find({})
//Workout.aggregate ([
   // {
     //   $addFields: {
     //       totalDuration: { $sum: "$duration"}
     //   }
   // }
//])
 .then(dbWorkout => {
     console.log(`get: ${dbWorkout}`);
     res.json(dbWorkout);
 })
 .catch (err => {
     res.status(400).json(err);
 });
});

//put route to add to a workout
router.put("/workouts/:id", ({params, body},res) => {

    Workout.findOneAndUpdate(
        {_id:params.id}, 
        {$push: {exercises: body}}, 
        {new:true})
    .then(dbWorkout => {
        console.log(`put: ${dbWorkout}`)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

//get route to retrieve last 7 workouts for stats page
router.get("/workouts/range", (req,res) => {
    Workout.find({})
    .limit(7)
    .then(dbWorkout => {
        console.log(`range: ${dbWorkout}`)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;









