const router = require("express").Router();
const { db } = require("../models/workout.js");
const Workout = require("../models/workout.js");

router.post("/workouts", ({body}, res) => {
Workout.create(body)
.then(({_id}) => Workout.findOneAndUpdate({}, {$push: {workouts: _id}}, {new:true}))
.then(dbWorkout => {
    res.json(dbWorkout);
})
.catch(err => {
    res.status(400).json(err);
});
});


router.get("/workouts", (req, res) => {
 Workout.find({})
 .then(dbWorkout => {
     res.json(dbWorkout);
 })
 .catch (err => {
     res.status(400).json(err);
 });
});


router.get("/workouts/:id", (req,res) => {
    const id = req.body.id;
    Workout.find({_id:id})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


router.put("/workouts/:id", ({body},res) => {
    Workout.create(body)
    .then(({_id}) => Workout.findOneAndUpdate({}, {$push: {workouts: _id}}, {new:true}))
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


//router.get("/workouts/range")

module.exports = router;









