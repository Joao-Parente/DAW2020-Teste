var express = require('express');
var router = express.Router();

const Batismo = require('../controllers/batismo')


// GET /api/batismos - Devolve a lista dos batismos, 
//com os campos: _id, date, title e ref;

router.get('/batismos', function (req, res) {

  if (req.query.ano) {
    //GET /api/batismos?ano=YYYY - Devolve a lista de batismos realizados no ano YYYY;
    Batismo.listar5(req.query.ano)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }
  else {
    Batismo.listar1()
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }
});

//GET /api/batismos/batisado - Devolve apenas uma lista com os 
//nomes dos indivíduos batizados ordenada alfabeticamente;
router.get('/batismos/batisado', function (req, res) {
  console.log("hduahs")
  Batismo.listar3()
    .then(dados => res.status(200).jsonp(dados.map(a => a.nome)))
    .catch(e => res.status(500).jsonp({ error: e }))
});

// GET /api/batismos/progenitores - Devolve uma lista de triplos em que cada 

//triplo tem a seguinte estrutura: 
//{_id: "identificador do registo original", 
//pai: "nome do pai do indivíduo que foi batizado",
// mae: "nome da mae do indivíduo que foi batizado"};
// Esta alínea poderá ser resolvida de várias maneira e
// irá depender da forma como resolveste as primeiras.
router.get('/batismos/progenitores', function (req, res) {

  Batismo.listar4()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});

//GET /api/batismos/stats - Devolve uma lista de pares, ano 
//e número de batismos nesse ano
router.get('/batismos/stats', function (req, res) {

  Batismo.stats6()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});

// GET /api/batismos/:id - Devolve a informação completa de um batismo;
router.get('/batismos/:id', function (req, res) {
  Batismo.consultar2(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});




/*

// Número de filmes numa bd
router.get('/filmes', function(req, res) {
  Filme.listar()
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
});


// Número de filmes numa bd
router.get('/filmes/numero', function(req, res) {
  Filme.listar()
    .then(dados => res.status(200).jsonp(dados.length) )
    .catch(e => res.status(500).jsonp({error: e}))
});


// Consultar uma Filme
router.get('/filmes/:id', function(req, res) {

  Filme.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});





// Inserir uma Filme
router.post('/filmes', function(req, res){
  Filme.inserir(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: e}))
})

// Alterar uma Filme
router.put('/filmes', function(req, res){
  Filme.alterar(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: e}))
})

// Remover uma Filme
router.delete('/filmes/:id', function(req, res) {
  Filme.remover(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});


router.get('/casamentos', function (req, res) {



  if (req.query.nome) {

    // GET /api/casamentos?nome=X - Devolve apenas uma lista com os casamentos onde 
    //o nome X aparece incluído no título;
    Casamento.listar3(req.query.nome)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }

  else if (req.query.ano) {
    // GET /api/casamentos?ano=YYYY - Devolve a lista de casamentos realizados no
    // ano YYYY;
    Casamento.listar4(req.query.ano)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }

  else if (req.query.byAno=='true') {
    //// GET /api/casamentos?byAno=true - Devolve a lista de casamentos agrupadas por ano, ou seja, devolve uma lista de anos em que a cada ano está associada 
    //uma lista de casamentos (coloque apenas a ref e o title do casamento);
    Casamento.listar5()
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }
  else {
    // GET /api/casamentos - Devolve a lista dos casamentos, com os campos: date, title e ref;
    Casamento.listar1()
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({ error: e }))
  }
});

//GET /api/casamentos/noivos - Devolve uma lista de nomes dos noivos, 
//ordenada alfabeticamente, e o id do respetivo registo..

router.get('/casamentos/noivos', function (req, res) {
  Casamento.noivos6()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});



// GET /api/casamentos/:id - Devolve a informação completa de um casamento (nesta rota, considere para id o campo ref);
router.get('/casamentos/:id', function (req, res) {
  Casamento.consultar2(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});



*/
module.exports = router;
