const express = require("express")
const models = require("../db/db")
const checkUser = require("../middleware/checkUser")

const router = express.Router()

router.get("/messages", async(req,res)=>{
    try{
        const messages = await models.messages.findAll()
        return res.status(200).send(messages)
    } catch(e){
        return res.status(400).send(e)
    }
})

router.post("/messages",checkUser, async(req,res)=>{
    try{
        const user = await models.user.findAll({where:{email:req.user.email}})
        console.log(user[0])
        const messages = await models.messages.create({
            userId: user[0].dataValues.id,
            emergencyType: req.body.emergencyType,
            emergencyMessage: req.body.emergencyMessage
        })
        return res.status(200).send(messages)
    } catch(e){
        return res.status(400).send(e)
    }
})

module.exports = router