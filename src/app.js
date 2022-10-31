const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const messageRouter = require("./routers/messages")
const policeRouter = require("./routers/police")
const emergencyContactInfoRouter = require("./routers/emergencyContactInfo")
require('./db/db')


const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(messageRouter)
app.use(policeRouter)
app.use(emergencyContactInfoRouter)

module.exports = app