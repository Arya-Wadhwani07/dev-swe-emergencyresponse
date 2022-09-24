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
        }
    })
    messages.associate = (models)=>{
        messages.belongsTo(models.user,{
            foreignKey: "id",
            as:"user_id"
        })
    }
    return messages
}