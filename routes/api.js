const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
const Workout = require("../models/workout.js");

router.post("/workouts", ({body}, res) => {
Workout.create({})
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
    const id = req.params.id;
    Workout.find({_id:id})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


router.put("/workouts/:id", ({params, body},res) => {

    Workout.findOneAndUpdate(
        {_id:params.id}, 
        {$push: {exercises: body}}, 
        {new:true})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


router.get("/workouts/range", (req,res) => {
    Workout.find({})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;









