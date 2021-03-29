const express = require('express')
const app = express();
const mongoose = require("mongoose")
const cors = require('cors')

require('dotenv/config')
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
//ROUTES
const toDosRoute = require('./routes/toDos');
app.use('/toDo', toDosRoute);

//Database connection
const options = {
    useUnifiedTopology:true,
    useNewUrlParser: true
}
// console.log("Connecting to DB...")
// mongoose.connect(process.env.DB_CONNECTION, options)
// // mongoose.connection.on('connected', ()=>{
// //         console.log("Connected to DB...")
// // })
// //Close the connection
// mongoose.connection.close()
// mongoose.connection.on("close", ()=>{
//     console.log("DB connection closed...")
// }) 

app.listen(port)