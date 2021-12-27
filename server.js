const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})

const connectDB = require('./config/db')
connectDB()

app.use(express.json())

const homodexRouter = require('./routes/homodex')
app.use('/homodex', homodexRouter)

app.listen(process.env.PORT, () => console.log('Server Started'))