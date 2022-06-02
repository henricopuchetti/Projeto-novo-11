module.exports = (app)=>{
    //abrir o arquivo login.ejs
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
    //validar o usuario e senha
    app.post('/login', async(req,res)=>{
        //recuperar as informmações digitadas no fomrulários
        var dados = req.body
        //conectar com o banci de dados
        var database = require('../config/database')()
        //selecionar a model usuarios
        var usuarios = require('../models/usuarios')
        //verificar se o email esta cadastrado
        var verificar = await usuarios.findOne(
            {email:dados.email})
            if (!verificar){
                return res.send("Email não Cadastro")
            }
            var cript = require('bcryptjs')
            var comparar = await  cript.compare(dados.senha,verificar.senha)
            if (!comparar) {
                return res.send("Senha Inválida!")
            }
            //buscar as atividades do usuario
            const atividades = require("../models/atividades")
            var buscar = await atividades.find({usuario:verificar._id})

            res.render("atividades.ejs",{lista:buscar,nome:verificar.nome,id:verificar._id})
    })
}