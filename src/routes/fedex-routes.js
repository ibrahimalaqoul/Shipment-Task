'use strict';
const routers = require('express').Router();
const { Fedexmodel } = require('../models/index')
const bearer = require('../middlewares/bearer')



routers.post('/fedexCreate', bearer, async (req, res) => {
    let { FedExID, carrierServiceID, width, height, length, weight } = req.body;
    let newFedex = await Fedexmodel.create({
        FedExID: FedExID,
        carrierServiceID: carrierServiceID,
        width: width,
        height: height,
        length: length,
        weight: weight
    })
    res.status(201).send(newFedex);
})

routers.get('/getallfEDEX', bearer, async (req, res) => {
    let shipments = await Fedexmodel.findAll()
    res.status(200).send(shipments);
});

routers.delete('/deletefedex', bearer, async (req, res) => {
    let deletedfedex = await Fedexmodel.delete({ where: { id: req.params.id } })
    res.status(200).send(
        `shipment with ${deletedfedex.id} was deleted successfully`,
    );
});
module.exports = routers;