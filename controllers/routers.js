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
})
    .get('/users',function(req, res) {

        Usuario.find(function(err, usuarios) {
            if(err)
                res.send(err);

            res.json(usuarios);
        });
    })

        .delete(function(req, res) {
     
            Usuario.deleteMany({
            }, function(error) {
                if(error)
                    res.send(error);

                res.json({ message: 'Usuários excluídos com Sucesso! '});
            });
        });
            router.route('/users/:user_id')
    
                .get(function(req, res) {                       

                    Usuario.findById(req.params.user_id, function(error, usuario) {
                        if(error)
                            res.send(error);
            
                        res.json(usuario);
                    });
                })
                    .put(function(req, res) {
            
                        Usuario.findById(req.params.user_id, function(error, usuario) {
                            if(error)
                                res.send(error);
            
                            //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
                            usuario.nome = req.body.nome;
                            usuario.email = req.body.email;
                            usuario.senha = req.body.senha;
            
                            //Terceiro: Agora que já atualizamos os campos, precisamos salvar essa alteração....
                            usuario.save(function(error) {
                                if(error)
                                    res.send(error);
            
                                res.json({ message: 'Usuário Atualizado!' });
                            });
                        });
                    })
                        .delete(function(req, res) {                
                           
                            Usuario.deleteOne({
                            _id: req.params.user_id
                            }, function(error) {
                                if(error)
                                    res.send(error);
                    
                                res.json({ message: 'Usuário excluído com Sucesso! '});
                            });
                        });

module.exports=app=> app.use('/api/v1', router);