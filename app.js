require('dotenv').config();
require('./db/db');

const Server = require('./models/server');

const server = new Server();

server.listen();