const mongoose = require('mongoose'); 
 
mongoose.connect('mongodb+srv://faustino:123456faust@cluster0.9qpms.mongodb.net/db_api?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
//mongoose.Promise = global.Promise;

module.exports=mongoose;