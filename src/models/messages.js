const validator = require('validator')
module.exports = (sequelize, DataTypes) => {
    const messages = sequelize.define('messages', {
        emergencyType: {
            type: DataTypes.ENUM("FIRE", "MEDICAL", "POLICE", "OTHER", "SOS"),
            allowNull: false
        },
        emergencyMessage: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}