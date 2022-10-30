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
        victimeAge:{
            type:DataTypes.INTEGER,
            validate:{
                checkAge(value){
                    if(!validator.isInt(value)){
                        throw new Error("Invalid Age!")
                    }
                }
            }
        }
    })
    return police
}