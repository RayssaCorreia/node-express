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

// escutando a porta 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
