const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        NID: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email : {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        position: {
            type: DataTypes.STRING
        },
        manufacturer: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        serialNumber: {
            type: DataTypes.STRING
        }
    };

    

    return sequelize.define('Employee', attributes);
}
