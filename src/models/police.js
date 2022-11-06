const validator = require('validator')
module.exports = (sequelize, DataTypes)=>{
    const police = sequelize.define('police',{
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        crimeCategory:{
            type: DataTypes.ENUM("ROBBERY","ABUSE","MURDER","ASSAULT","KIDNAPPING","DRUGS","DUI","TRESPASSING")
        },
        victimName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        victimAge:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return police
}