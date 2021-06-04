const express = require('express');
const router = express.Router();

const Usuario = require('../models/users');

//inserir Usuario
router.post('/users', async (req,res)=>{

    try{
        const usuario = await Usuario.create(req.body);

        usuario.nome=req.body.name;
        usuario.email=req.body.email;
        usuario.senha=req.body.senha;

        return res.send({usuario});
    }catch(err){
        return res.status(400).send({error:'Falha de Registro'})
    }    
});

module.exports=app=> app.use('/v1', router);