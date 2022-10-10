'use strict';
const routers = require('express').Router();
const { Upsmodel } = require('../models/index')
const bearer = require('../middlewares/bearer')



routers.post('/upsCreate', bearer, async (req, res) => {
    let { UPSID, shipmentServiceID, width, height, length, weight } = req.body;
    let newups = await Upsmodel.create({
        UPSID: UPSID,
        shipmentServiceID: shipmentServiceID,
        width: width,
        height: height,
        length: length,
        weight: weight
    })
    res.status(201).send(newups);
})

routers.get('/getallups', bearer, async (req, res) => {
    let shipments = await Upsmodel.findAll()
    res.status(200).send(shipments);
});

routers.delete('/deleteups', bearer, async (req, res) => {
    let deletedups = await Upsmodel.delete({ where: { id: req.params.id } })
    res.status(200).send(
        `shipment with ${deletedups.id} was deleted successfully`,
    );
});
module.exports = routers;