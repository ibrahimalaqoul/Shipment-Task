'use strict';

require('dotenv').config()
const { db } = require('./src/models/index')
const server = require('./src/server');
// making sure that express server is available after it's connected with th postgress server
db.sync().then(() => {

    server.start(process.env.PORT || 3000)
}).catch(err => console.log(err));