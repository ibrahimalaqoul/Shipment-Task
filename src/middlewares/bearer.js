'use strict';
// checking the user token if it is valid or not
require('dotenv').config();
const { Usermodel } = require('../models/index')
const JWT = require('jsonwebtoken');
const base64 = require('base-64');

const SECRET = process.env.SECRET || 'mysecret'

const bearer = async (req, res, next) => {
    if (req.headers.authorization) {

        let bearerParts = req.headers.authorization.split(' ');
        let userToken = bearerParts.pop();
        if (userToken) {
            const token = JWT.verify(userToken, SECRET);// verifing the token got from the front end side
            console.log('token to be verified', token);
            const User = await Usermodel.findOne({ where: { username: token.username } })
            if (User) {
                req.userToken = token;
                req.User = User
                next()
            } else {
                res.status(403).send('token does not match the user')
            }
        } else {
            res.status(403).send('invalid token');
        }

    } else {
        res.status(403).send('empty token')
    }

}
module.exports = bearer;