'use strict'
// creating a signin endpoint for the users using express Router
require('dotenv').config();

const routers = require('express').Router();
const { usermodel } = require('../models/index')
const basic = require('../middlewares/basic')

routers.post('/signin/users', basic, async (req, res) => {
res.status(200).send(req.User)
})
module.exports = routers