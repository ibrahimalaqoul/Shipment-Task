'use strict'
//creating the Fedex shipments table within the database

const Fedex = (sequelize, DataTypes) => sequelize.define('fedex', {
   id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
   },
   FedExID: {
      type: DataTypes.ENUM('fedex'),
      allowNull: false,
      validate: {
         notNull: {
            msg: 'Please enter shipment FedExID'
         },
      },

   },
   carrierServiceID: {
      type: DataTypes.ENUM('fedexAIR', 'fedexGroud')
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
module.exports = Fedex;