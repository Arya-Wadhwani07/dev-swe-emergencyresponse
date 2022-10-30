const express = require("express")
const models = require("../db/db")
const checkUser = require("../middleware/checkUser")

const router = express.Router()

router.get("/emergencyContactInfo", async(req,res)=>{
    try{
        const emergencyContactInfo = await models.emergencyContactInfo.findAll()
        return res.status(200).send(emergencyContactInfo)
    } catch(e){
        return res.status(400).send(e)
    }
})

router.post("/emergencyContactInfo",checkUser, async(req,res)=>{
    try{
        const user = await models.user.findAll({where:{email:req.user.email}})
        const emergencyContactInfo = await models.emergencyContactInfo.create({
            userId: user[0].dataValues.id,
            name: req.body.name,
            address: req.body.address,
            contactNo: req.body.contactNo
        })
        return res.status(200).send(emergencyContactInfo)
    } catch(e){
        return res.status(400).send(e)
    }
})

module.exports = router