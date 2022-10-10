'use strict';
// creating a signup endpoint for the users using express Router
const routers = require('express').Router();

const { usermodel } = require('../models/index')
const bcrypt = require('bcrypt')

routers.post('/signup/users', async (req, res) => {
    let { username, password, email, mobileNumber } = req.body;
   let hashedPassword = await bcrypt.hash(password,5);
   let newUser = await usermodel.create({
    username :username,
    password :hashedPassword,
    email :email,
    mobileNumber :mobileNumber
   })
   res.status(201).send(newUser)
})

module.exports = routers;