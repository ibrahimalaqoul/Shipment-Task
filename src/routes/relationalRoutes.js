'use strict';
const routers = require('express').Router();
const { Fedexmodel, Upsmodel } = require('../models/index')

routers.get('/getallshipmentfedex/:id', async (req, res) => {
    let shipmentsFedex = await Fedexmodel.findAll({ where: { userId: req.params.id } })
    res.status(200).send(shipmentsFedex)
})
routers.get('/getallshipmentups/:id', async (req, res) => {
    let shipmentsUpsmodel = await Upsmodel.findAll({ where: { userId: req.params.id } })
    res.status(200).send(shipmentsUpsmodel)
})


module.exports = routers