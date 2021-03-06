const express = require('express');
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');


const route = express.Router();


//Rota barra(raíz) vai renderizar o index.ejs
route.get('/', (req, res) => {
    res.render("index", {page: 'enter-room'})
});



route.get('/create-pass', (req, res) => {
    res.render("index", {page: 'create-pass'})
})



//Este irá mandar as informações sobre a criação de uma sala
route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enter-room', roomController.enter)

//Passando as variaveis para a url
//Formato que o formulário da modal deverá mandar para outra página 
//(Apenas das questions)
route.post('/question/:room/:question/:action', questionController.index);

route.post('/question/create/:room', questionController.create)


//Exportando o route
module.exports = route