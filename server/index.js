const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(process.env.Atlas).then(() => {
    console.log("Connection succesfull")
})

const users = require('./routes/user')

app.use('/',users);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})