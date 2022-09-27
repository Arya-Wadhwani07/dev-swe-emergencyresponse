const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const messageRouter = require("./routers/messages")
require('./db/db')


const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(messageRouter)


app.listen(port, ()=>{
    console.log("Port Listening on "+port)
})