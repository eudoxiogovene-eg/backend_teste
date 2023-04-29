
const mongoose=require('mongoose')
const BairroScheme= new mongoose.Schema({
              nomeBairro:{
                  type:String,
                  required:true,
                  lowercase:true
              },
              cidade:{
                type:String,
                required:true,
                lowercase:true
             },
  
            

       
}) 
module.exports=mongoose.model('Bairros', BairroScheme) 

 