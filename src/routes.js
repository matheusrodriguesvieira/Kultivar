const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');
const plantasController = require("./controller/plantasController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/cadastrarItem', upload.single('imagem'), plantasController.store);
routes.get('/', plantasController.index);
routes.get('/tipos', plantasController.tipos);
routes.get('/:planta_id/cultivar', plantasController.show);

module.exports = routes;