const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
require('./db/db')


const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(userRouter)


app.listen(port, ()=>{
    console.log("Port Listening on "+port)
})