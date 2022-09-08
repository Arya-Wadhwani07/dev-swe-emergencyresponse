const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("blrtweikqpvvzbf0hj3c", "ud1l4uj6n18prukr", "HIIBf3UnQE5DVaehKbKn",{
    host: "blrtweikqpvvzbf0hj3c-mysql.services.clever-cloud.com",
    dialect: "mysql"
})

try{
    sequelize.authenticate()
    console.log("Authentication Successfull")
} catch{
    console.log("Error")
}