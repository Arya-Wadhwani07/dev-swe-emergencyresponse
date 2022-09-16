const express = require('express')
const models = require('../db/db')
const checkUser = require('../middleware/checkUser')

const router = express.Router()


router.get('/home', async(req,res)=>{
    return res.send("Hello World")
})

router.post('/user',checkUser,async(req,res)=>{
    try{
        const user = await models.user.create({
            name: req.body.name,
            email: req.user.email,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            dateOfBirth: req.body.dateOfBirth,
            bloodGroup: req.body.bloodGroup
        })
        return res.send(user)
    } catch(e){
        console.log(e)
    }
    
})



module.exports = router