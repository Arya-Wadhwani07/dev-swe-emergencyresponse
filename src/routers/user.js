const express = require('express')
const models = require('../db/db')
const checkUser = require('../middleware/checkUser')

const router = express.Router()


router.get('/home', async(req,res)=>{
    return res.send("Hello World")
})

router.get('/users',async(req,res)=>{
    try{
        const users = await models.user.findAll()
        return res.status(200).send(users)
    } catch(e){
        return res.status(400).send(e);
    }
})

router.get('/user',checkUser,async(req,res)=>{
    try{
        const user = await models.user.findAll({where:{email:req.user.email}})
        return res.status(200).send(user)
    } catch(e){
        return res.status(400).send(e);
    }
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
        return res.status(200).send(user)
    } catch(e){
        return res.status(400).send(e)
    }
})





module.exports = router