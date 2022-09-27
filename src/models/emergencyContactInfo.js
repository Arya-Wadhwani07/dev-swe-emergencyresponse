const validator = require('validator')
module.exports = (sequelize, DataTypes)=>{
    const emergencyContactInfo = sequelize.define('emergencyContactInfo',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        contactNo:{
            type:DataTypes.STRING,
            allowNull: true,
            validate:{
                checkPhoneNum(value){
                    if(!validator.isMobilePhone(value)){
                        throw new Error("Invalid Phone Num!")
                    }
                }
            }
        }
    })
    return emergencyContactInfo
}