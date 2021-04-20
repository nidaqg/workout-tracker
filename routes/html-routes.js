const express = require("express");
const path = require("path");
const router = require("express").Router();


//route to display homepage
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//route to display exercsie page
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//route to display stats page
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router