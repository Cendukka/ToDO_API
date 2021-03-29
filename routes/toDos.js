const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo')
const mongoose = require('mongoose')

router.get('/get', async (req, res) => {
    //Database connection
const options = {
    useUnifiedTopology:true,
    useNewUrlParser: true
}
    
    mongoose.connect(process.env.DB_CONNECTION, options,  (err,db)=>{
        
        let ToDos = mongoose.model("ToDo", ToDo.schema)
        ToDos.find({}, (error, data)=>{
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
        time: req.body.time,
        duration: req.body.duration
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
    res.send("Working delete")
});

module.exports = router;