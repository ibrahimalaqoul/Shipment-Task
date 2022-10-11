'use strict';
//creating the users table within the database
const User = (sequelize, DataTypes) => sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your username'
            }
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     len: {
        //         args: 3
        //     }
        // }
        len : [8,64]

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    mobileNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        validate: {
            isInt: true,
        },
       
    },
    token: {
        type: DataTypes.VIRTUAL,
    }

})
module.exports = User;