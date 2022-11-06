const validator = require('validator')
module.exports = (sequelize, DataTypes) => {
    const messages = sequelize.define('messages', {
        userId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        emergencyType: {
            type: DataTypes.ENUM("FIRE", "MEDICAL", "POLICE", "OTHER", "SOS"),
            allowNull: false
        },
        emergencyMessage: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false
        },
        extraInformation:{
            type: DataTypes.STRING
        }
    })
    messages.associate = (models)=>{
        messages.belongsTo(models.user,{
            foreignKey: "userId",
            through:"user_message"
        })
    }
    return messages
}