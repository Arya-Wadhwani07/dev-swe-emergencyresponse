const express = require("express")
const axios = require('axios').default;
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
        const messages = await models.messages.create({
            userId: user[0].dataValues.id,
            emergencyType: req.body.emergencyType,
            emergencyMessage: req.body.emergencyMessage,
            location: req.body.location,
            extraInformation: req.body.extraInformation
        })
        return res.status(200).send(messages)
    } catch(e){
        return res.status(400).send(e)
    }
})

router.get("/priorityMessage", async(req,res)=>{
    try{
        var messagesArray = []
        const messages = await models.findAll({where:{notified:"FALSE"}})
        console.log(messages)
        messages.forEach(message => {
            messagesArray.push(message.emergencyMessage)
        });
        console.log(messagesArray)
        const data = {
            text:messagesArray
        }
        axios.post("http://127.0.0.1:5000",data).then(function (response) {
            res.status(200).send(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router