const mongoose = require('mongoose');

const PlantaSchemma = new mongoose.Schema({
    thumbnail: String,
    tipo: String,
    nome: String,
    nomeCientifico: String,
    descricao: String,
    tempoCultivo: Number,
    detalhes: String,
    etapasCultivo: [String]
}, {
    toJSON: {
        virtuals: true,
    },
});

PlantaSchemma.virtual('thumbnail_url').get(function () {
    return `http://192.168.1.9:3000/files/${this.thumbnail}`
});

module.exports = mongoose.model('Planta', PlantaSchemma);