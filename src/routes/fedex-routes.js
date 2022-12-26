'use strict';
const routers = require('express').Router();
const { Fedexmodel } = require('../models/index')
const bearer = require('../middlewares/bearer')



routers.post('/fedexCreate/:id', bearer, async (req, res) => {
    let { FedExID, carrierServiceID, width, height, length, weight } = req.body;
    let id = req.params.id;
    let newFedex = await Fedexmodel.create({
        FedExID: FedExID,
        carrierServiceID: carrierServiceID,
        width: width,
        height: height,
        length: length,
        weight: weight,
        userId: id
    })
    res.status(201).send(newFedex);
})

routers.get('/getallfEDEX', bearer, async (req, res) => {
    let shipments = await Fedexmodel.findAll()
    res.status(200).send(shipments);
});

routers.delete('/deletefedex/:id', bearer, async (req, res) => {
    let deletedfedex = await Fedexmodel.destroy({ where: { id: req.params.id } })
    res.status(200).send(
        `shipment with ${deletedfedex.id} was deleted successfully`,
    );
});
module.exports = routers;
