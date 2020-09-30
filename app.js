const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

const db = async () => {
    await mongoose.connect(
        process.env.DATABASE, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    ).then(x => console.log('DB Connected..'))
    .catch(error => console.error('DB Connection Error: ', error))
}

db()
// port
const port = process.env.PORT || 8000

// listn port
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})