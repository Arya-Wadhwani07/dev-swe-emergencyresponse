const express = require('express')
require('./db/db')
const app = express()
const port = 3000

app.use(express.json())

app.get('/home', async(req,res)=>{
    const name={
        name:"Arya",
        age:"6"
    }
    return res.send(name)
})

app.post('/home1', async(req,res)=>{
    return res.send(req.body)
})


app.listen(port, ()=>{
    console.log("Port Listening on "+port)
})