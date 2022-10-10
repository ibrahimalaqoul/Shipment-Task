'use strict'
//creating the ups shipments table within the database

const Ups = (sequelize, DataTypes) => sequelize.define('ups', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    UPSID: {
        type: DataTypes.ENUM('ups'),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter shipment UPSID'
            },
        },
    },
    shipmentServiceID: {
        type: DataTypes.ENUM('UPSExpress', 'UPS2DAY')
    },

    width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter shipment width'
            },
            isInt: true,
        },
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter shipment height'
            },
            isInt: true,
        },
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter shipment height'
            },
            isInt: true,
        },
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter shipment height'
            },
            isInt: true,
        },
    },


})
module.exports = Ups;