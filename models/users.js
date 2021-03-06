const mongoose = require('../data/connectionBd');

const UsuarioSchema = new mongoose.Schema({
    nome: {
       type: String,
       required: true, 
    },
    email:{
        type: String,
        unique:true,
        required:true,
        lowercase:true,
    },
    senha:{
        type: String,
        required:true,
        select:false,
    },

    createdAt:{
        type:Date,
        default: Date.now,
    }
});
 
const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports= Usuario;