const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const db = require('./config/db').database

// Database connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully')
    })
    .catch((err) => {
        console.log('Unable to connect with the database', err)
    })

// Defining the port
const port = process.env.PORT || 5000

// Initialize cors Middleware
app.use(cors())

// Initalize bodyparser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

// Initialize public directory
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

const postRoutes = require('./routes/apijs/post')

app.use('/api/posts', postRoutes)

app.listen(port, () => {
    console.log(`Server started on port http://127.0.0.1:${port}`)
})