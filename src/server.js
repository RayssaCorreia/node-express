// importar 
const express = require('express')
// usando 
const app = express()
// definindo a porta 
const port = 3000

// rotiamento de leitura (define o local )
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res){
    res.send('Recebendo uma soliciatação POST'); // pelo que entendi: solicitação para um post.
})

app.put('/', function (req, res){
    res.send ('Recebi uma solicitação PUT em /user');
})

// escutando a porta 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
