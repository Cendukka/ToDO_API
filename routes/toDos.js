const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo')
const mongoose = require('mongoose')
const ToDos = mongoose.model("ToDo", ToDo.schema)
const urlRegex = /[^get/]*$/

router.get('/get/:date', async (req, res) => {
    //Database connection
    const options = {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }
    let date = req.url.match(urlRegex)[0]
    
    
    
    mongoose.connect(process.env.DB_CONNECTION, options,  (err,db)=>{
        ToDos.find({date:date}, (error, data)=>{
            if(error){
                console.log(error)
                res.json({message: "Error happened while fetching data, try again by refreshing page"})
            }else{
                console.log(data)
                res.json(data)
            }
        })
        
    })    
});
router.post('/post', (req, res) => {
    const toDo = new ToDo({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time
    })
    console.log(toDo)
    toDo.save()
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({message: err})
    })
});
router.put('/put', (req, res) => {
    res.send("Working put")
});
router.delete('/delete', (req, res) => {
    ToDos.deleteOne({_id: req.body.ID}, (err)=>{if(err)console.log(err)})
    res.send("Deleted")
});

module.exports = router;