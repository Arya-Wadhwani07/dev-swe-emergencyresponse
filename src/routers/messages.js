const express = require("express");
const axios = require('axios').default;
const models = require("../db/db")
const checkUser = require("../middleware/checkUser")

const router = express.Router()

router.get("/messages", async (req, res) => {
    try {
        const messages = await models.messages.findAll()
        return res.status(200).send(messages)
    } catch (e) {
        return res.status(400).send(e)
    }
})

router.post("/messages", checkUser, async (req, res) => {
    try {
        const user = await models.user.findAll({ where: { email: req.user.email } })
        const messages = await models.messages.create({
            userId: user[0].dataValues.id,
            emergencyType: req.body.emergencyType,
            emergencyMessage: req.body.emergencyMessage,
            location: req.body.location,
            extraInformation: req.body.extraInformation,
            notified: "FALSE"
        })
        return res.status(200).send(messages)
    } catch (e) {
        return res.status(400).send(e)
    }
})

router.get("/priorityMessage", async (req, res) => {
    try {
        var messagesArray = []
        var finale
        var temp
        var finale_data = []
        const messages = await models.messages.findAll({include:'user',where: { notified: "FALSE" } })
        Promise.all(messages.map(message => {
            messagesArray.push(message.dataValues.emergencyMessage)
        }))
        const data = { text: messagesArray }
        await axios.post("https://disaster-response-api-01.herokuapp.com", data)
            .then(async (response) => {
                temp = response.data
                // console.log(temp)
                const final_data = await models.messages.findAll({
                    include:"user",
                    where: {
                        emergencyMessage: {
                            in: temp
                        }
                    }
                })
                finale = final_data
            })
            .catch(function (error) {
                console.log(error);
            })
        Promise.all(temp.map((data, index) => {
            var result = finale.find(item => item.emergencyMessage == data)
            finale_data.push(result)
        }))
        res.status(200).send(finale_data)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.post("/priorityMessage", async (req, res) => {
    const message = req.body.message
    await models.messages.update({
        notified: "TRUE"
    }, {
        where: {
            emergencyMessage: message
        }
    })
})


module.exports = router