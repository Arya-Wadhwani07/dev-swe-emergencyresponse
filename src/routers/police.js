const express = require("express")
const models = require("../db/db")
const checkUser = require("../middleware/checkUser")

const router = express.Router()

router.post("/police",checkUser,async(req,res)=>{
    try{
        const user = await models.user.findAll({ where:{ email: req.user.email } })
        const police = await models.police.create({
            userId: user[0].dataValues.id,
            crimeCategory: req.body.crimeCategory,
            victimName: req.body.victimName,
            victimAge: req.body.victimAge
        })
        return res.status(200).send(police)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get("/police",async(req,res)=>{
    try{
        const polices = await models.police.findAll()
        return res.status(200).send(polices)
    } catch(e){
        return res.status(200).send(e)
    }
})

module.exports = router