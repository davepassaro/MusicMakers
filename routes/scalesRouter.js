const express = require("express");
const scalesRouter = express.Router();
const db = require('../models/db')
const moment = require('moment')
const bodyParser = require('body-parser');

scalesRouter.use(bodyParser.urlencoded({ extended: false }));
scalesRouter.use(bodyParser.json());

// Create scale
scalesRouter.post("/", async function (req, res, next) {
    //Only post if a user is logged in.
    if(req.user){
        //Check that name is not the same
        const query = 'SELECT COUNT(scale_id) AS NumberOfScales FROM Scales WHERE name = ? AND user_id = ?'
        const params = [req.body.name, req.user.user_id]
        db.pool.query(query, params, function(err, rows, fields){
            //Name is unique
            if(rows[0].NumberOfScales == 0){
                const querystring = 'INSERT INTO Scales (name, user_id, created_at) VALUES (?,?,?)'
                const parameters = [req.body.name, req.user.user_id, moment().format('MMMM Do YYYY, h:mm:ss a')]
                db.pool.query(querystring, parameters, function(err, rows, fields){
                    if(err) {
                        console.log(err)
                        return
                    }
                    const {insertId} = rows
                    const sorted_checked = req.body.checked.sort()
        
                    //Insert into Scales_Notes every note selected
                    sorted_checked.forEach(note => {
                        const qstring = 'INSERT INTO Scales_Notes (scale_id, note_id) VALUES (?, (SELECT note_id FROM Notes WHERE note = ? AND octave = ?))'
                        const params = [insertId, note.substring(1), note.substring(0,1)]
                        db.pool.query(qstring, params, function(err, rows, fields){
                            if(err){
                                console.log(err)
                                return
                            }
                        })
                    });
                    res.status(201).json({"name": req.body.name, "user_id": req.user.user_id});
                    return
                });
            }
            else res.status(400).send(`You already have a scale with this name (${req.body.name}). Please choose a different name`) //Name not unique
        })
    } 
    else res.status(403).send("You are not logged in. Please login to create a scale.") //User is not logged in
});

//Get User's scales
scalesRouter.get("/", function(req, res, next){
    if(req.user){
        const queryString = "SELECT Scales.name, Scales.created_at, Notes.note, Notes.priority, Notes.octave " +  
                            "FROM Scales JOIN Scales_Notes ON Scales.scale_id = Scales_Notes.scale_id " +
                            "JOIN Notes ON Scales_Notes.note_id = Notes.note_id " +
                            "WHERE Scales.user_id = ? " +
                            "ORDER BY Scales.scale_id DESC"
        db.pool.query(queryString, req.user.user_id, function(err, rows, fields){
            if(err){
                console.log(err)
                return
            }
            res.status(200).json(rows)
        });
    }
    else res.status(403).json({"error": "Not Logged In"})
});

scalesRouter.get("/count", function(req, res, next){
    if(req.user){
        const queryString = "SELECT COUNT(scale_id) AS NumberOfScales FROM Scales WHERE user_id = ?"
        db.pool.query(queryString, req.user.user_id, function(err, rows, fields){
            if(err){
                console.log(err)
                return
            }
            res.status(200).json(rows)
        });
    }
    else res.status(403).json({"error": "Not Logged In"})
});

module.exports = scalesRouter;