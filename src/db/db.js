const { Sequelize } = require('sequelize')
const database = require("../secrets")

const sequelize = new Sequelize(
    database.DATABASE_NAME, 
    database.DATABASE_USERNAME, 
    database.DATABASE_PASSWORD, {
    host: database.DATABASE_HOST,
    dialect: database.DATABASE_DIALECT,
    sync:{
        force:true
    }
})

const models = {
    user: sequelize.import("../models/user"),
}

try {
    sequelize.authenticate().then(()=>{
        console.log("Authentication Successfull")
    })
    sequelize.sync({ force: true, logging: true }).then(()=>{
        console.log("Synchronised Successfully")
    })
} catch(e) {
    console.log(e)
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models