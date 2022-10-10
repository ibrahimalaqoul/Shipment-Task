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
        validate: {
            validatePassword: function (password) {
                if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(password))) {
                    throw new Error('The password must contain at least 8 and maximum 12 characters including at least 1 uppercase, 1 lowercase, one number and one special character.');
                }
            }
        },
        leng: [10, 64]
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
        token :{
            type: DataTypes.VIRTUAL,
        }
    },

})
module.exports = User;