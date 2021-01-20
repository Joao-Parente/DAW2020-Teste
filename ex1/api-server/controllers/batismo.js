// Controlador para o modelo Filme

var Batismo = require('../models/batismo')




module.exports.listar1 = () => {
    return Batismo
        .find({}, { _id: 1, date: 1, title: 1, ref: 1 })
        .exec()
}
module.exports.consultar2 = id => {
    return Batismo
        .findOne({ _id: id })
        .exec()
}

module.exports.listar3 = () => {
    return Batismo
        .aggregate([

            { $project: { _id: 0, nome: 1 } },
            { $sort: { nome: 1 } }
        ])
}

module.exports.listar4 = () => {
    return Batismo
        .aggregate([

            { $project: { _id: 1, mae:1,pai:1 } },
            { $sort: { _id: 1 } }
        ])
}

module.exports.listar5 = (ano) => {
    return Batismo
        .find({year:ano}, {})
        .exec()
}

module.exports.stats6 = () => {
    return Batismo
        .aggregate([
        
            {$group: {_id:"$year",numero:{$sum:1}}},
            {$project: {_id:0,"year":"$_id",numberOfBirth:"$numero"}}
        ])
}

// ----------------------------------------------
/*


// Devolve a lista de Filmes
module.exports.listar = () => {
    return Filme
        .find()
        .sort('+id')
        .exec()
}

module.exports.consultar = id => {
    return Filme
        .findOne({id: id})
        .exec()
}

module.exports.inserir = t => {
    var novo = new Filme(t)
    return novo.save()
}

module.exports.remover = function(id){
    return Filme.deleteOne({id: id})
}

module.exports.alterar = function(t){
    return Filme.findByIdAndUpdate({id: t.id}, t, {new: true})
}


module.exports.listar1 = () => {
    return Casamento
        .find()
        .exec()
}

module.exports.consultar2 = id => {
    return Casamento
        .findOne({ _id: id })
        .exec()
}
module.exports.listar3 = (nome) => {

    return Casamento
        .find({ title: new RegExp(nome) })// //title:{$regex:r}}
        .exec()
}

module.exports.listar4 = (ano) => {


    return Casamento
        .find({ date: Number(ano) })
        .exec()
}

module.exports.listar5 = () => {


    return Casamento
        .aggregate([

            {
                $group: {
                    _id: "$date",
                    casamentos: { $push: { ref: "$ref", title: "$title" } }
                }

            }
            ,
            { $project: { _id: 0, ano: "$_id", casamentos: 1 } }
        ])

}

module.exports.noivos6 = () => {


    return Casamento
        .aggregate([
            {$unwind:"$title"},
            {$project:{_id:1,nome:"$title"}},
            {$sort: {nome: 1}}
        ])
}
*/