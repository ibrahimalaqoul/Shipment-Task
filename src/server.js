'use strict';
//bulding the express server

const express = require('express');
const app = express();


const cors = require('cors');
require('dotenv').config()

const notFoundPage = require('./error-handlers/404')
const errorHandler = require('./error-handlers/500')
const signUpRouter = require('./routes/signup')
const signinRouter = require('./routes/signin')
const fedexRouters = require('./routes/fedex-routes')
const upsRouters = require('./routes/ups-routes')

//middlewares
app.use(express.json());// body parsing
app.use(signUpRouter);
app.use(signinRouter);
app.use(fedexRouters);
app.use(upsRouters);

//home page
app.get('/', (req, res) => {
    res.status(200).send('Home Page!');
});









app.use(errorHandler)
app.use('*',notFoundPage);

//making sure that the server is listening
function start(port) {

    app.listen(port, () => {
        console.log(`server is listening on port   ${port}`)
    })
}


module.exports = {
    start: start,
    app: app,
}