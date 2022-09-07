const express = require('express')
const app = express()
const port = 3000

app.get('/home', async(req,res)=>{
    const name={
        name:"Arya",
        age:"6"
    }
    return res.send(name)
})


app.listen(port, ()=>{
    console.log("Port Listening on "+port)
})