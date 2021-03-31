const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    time: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model("ToDO", ToDoSchema);