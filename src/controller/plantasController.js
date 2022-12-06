const Planta = require('../models/Planta');

module.exports = {

    async index(req, res){
        const { tipo } = req.query;
        const planta = await Planta.find({ tipo: tipo });

        return res.json(planta);
    },

    async tipos(req, res){
        // const tipos = Object.assign({}, await Planta.find().distinct('tipo'));
        const tipos = await Planta.find().distinct('tipo');
        return res.json(tipos);  
    },

    async show(req,res){
        const {planta_id} = req.params;
        const planta = await Planta.findOne({_id: planta_id});

        return res.json(planta);
    },


    async store(req, res) {
        const { filename } = req.file
        const { tipo, nome, nomeCientifico, descricao, tempoCultivo, etapasCultivo, detalhes } = req.body;

        const planta = await Planta.create({
            thumbnail: filename,
            tipo,
            nome,
            nomeCientifico,
            descricao,
            tempoCultivo,
            etapasCultivo: etapasCultivo.split(',').map(etapasCultivo => etapasCultivo.trim()),
            detalhes
        });
        return res.json({planta});
    }
};