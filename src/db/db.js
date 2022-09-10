const { Sequelize } = require('sequelize')
const database = require("../secrets")

const sequelize = new Sequelize(database.DATABASE_NAME, database.DATABASE_USERNAME, database.DATABASE_PASSWORD,{
    host: database.DATABASE_HOST,
    dialect: database.DATABASE_DIALECT
})

try{
    sequelize.authenticate()
    console.log("Authentication Successfull")
} catch{
    console.log("Error")
}