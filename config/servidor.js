//importar o pacote express
const express = require('express')
//executar o express
const app = express()
//definir a porta par o servidor
const porta = process.env.PORT || 3030

//definir a pasta dos arquivos de css e imagens
app.use(express.static("./assets"))
//definir o express como body parse
app.use(express.urlencoded({extended:false}))

//exportar app
module.exports = {app,porta}
