const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes.js');

const server = express();
mongoose.connect('mongodb+srv://ProjetoIntegrador:integrador123@projetointegrador.bgnpoeb.mongodb.net/Kultivar?retryWrites=true&w=majority');

server.use(cors());
server.use(express.json());
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(routes);

server.listen(3000);