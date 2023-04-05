const User = require("../models/jokes.model");


const ListaChistes = async (req, res)=>{

    const bromas = await User.find({});

    res.json(bromas);
}

const  BuscarChistes = async (req, res)=>{

    const ChisteBuscado = await User.findOne(req.body)
    res.json({result: 'ok', Encontrado: ChisteBuscado});
}

const CrearChiste = async (req, res)=>{

    const ChisteCreado = await User.create(req.body);
    res.json({result: 'ok', chiste_new: ChisteCreado});
}

const ActualizarChiste = async (req, res)=>{

    const ChisteActualizado = await User.findOneAndUpdate(req.body)
    res.json({result: 'ok', Actuzalizar: ChisteActualizado});
}

const EliminarChiste = async (req, res)=>{

    const chisteEliminado = await User.deleteOne(req.body)
    res.json({result: 'ok', Eliminado: chisteEliminado});
}

module.exports = {
    ListaChistes, BuscarChistes, CrearChiste, ActualizarChiste, EliminarChiste
}